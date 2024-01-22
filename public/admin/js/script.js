// Button-status
const buttonStatus = document.querySelectorAll("[button-status]");
console.log(buttonStatus);

let url = new URL(window.location.href);
console.log(url);

buttonStatus.forEach(button => {
	button.addEventListener("click", () => {
		const status = button.getAttribute("button-status");

		if (status) {
			url.searchParams.set("status", status);
		} else {
			url.searchParams.delete("status");
		}
		window.location.href = url.href;
		console.log(url.href);
	})
})
// End Button status

// Form search
const formSearch = document.querySelector("#form-search");
if (formSearch) {



	formSearch.addEventListener("submit", (e) => {
		e.preventDefault();
		const keyword = e.target.elements.keyword.value;
		if (keyword != "") {
			url.searchParams.set("keyword", keyword);
		} else {
			url.searchParams.delete("keyword");
		}

		window.location.href = url.href;

	})



}

// Pagination
const buttonPagination = document.querySelectorAll("[button-pagination]");
console.log(buttonPagination);

if (buttonPagination) {
	buttonPagination.forEach(button => {
		button.addEventListener("click", () => {
			const page = button.getAttribute("button-pagination");
			console.log(page);
			url.searchParams.set("page", page);
			window.location.href = url.href;
		})
	})
}

// End Pagination

// ChangeMulti
const checkboxMulti = document.querySelector("[checkbox-multi]");
console.log(checkboxMulti);
if (checkboxMulti) {
	const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
	const inputsId = checkboxMulti.querySelectorAll("input[name='id']");

	inputCheckAll.addEventListener("click", () => {
		if (inputCheckAll.checked) {
			inputsId.forEach(input => {
				input.checked = true;
			});
		} else {
			inputsId.forEach(input => {
				input.checked = false;
			});
		}
	})

	inputsId.forEach(input => {
		input.addEventListener("click", () => {
			const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;
			console.log(countChecked);

			if(inputsId.length == countChecked) {
				inputCheckAll.checked =true;
			}else {
				inputCheckAll.checked = false;
			}
		})
	}
	)
}

// End changeMulti


// Form changeMulti 

const formChangeMulti = document.querySelector("[form-change-multi]");
console.log(formChangeMulti);

if(formChangeMulti) {
	formChangeMulti.addEventListener("submit", (e) => {
		e.preventDefault();
		const checkboxMulti = document.querySelector("[checkbox-multi]");
		const inputsChecked = checkboxMulti.querySelectorAll("input[name='id']:checked");

		 const typeChange = e.target.elements.type.value;
		 if(typeChange == "delete-all") {
			const isConfirm = confirm("Bạn có muốn xóa những sản phẩm này không?");
			if(!isConfirm){
				return;
			}
		 }

		if(inputsChecked.length > 0) {
			let ids = [];
			const inputsIds = formChangeMulti.querySelector("input[name='ids']");
			
			inputsChecked.forEach(input => {
				const id = input.value;
				if(typeChange == "change-position") {
					const position = input.closest("tr").querySelector("input[name='position']").value;
					ids.push(`${id}-${position}`)
					
				} else {
					ids.push(id);
				}
				
			});

			inputsIds.value = ids.join(", ");
			console.log(ids);
			formChangeMulti.submit();

		} else {
			alert("Chọn một bản ghi");
		}
	})
}

// Show Alert
const showAlert = document.querySelector("[show-alert]");
if(showAlert) {
	const time = parseInt(showAlert.getAttribute("data-time"));
	setTimeout(() => {
		showAlert.classList.add("alert-hidden");
	}, time);

	const closeAlert = showAlert.querySelector("[close-alert]");
	console.log(closeAlert);
	closeAlert.addEventListener("click", () => {
		showAlert.classList.add("alert-hidden");
	})
}
//End Show Alert

// Upload Image
const uploadImage = document.querySelector("[upload-image]");
if(uploadImage) {
	const uploadImageInput = document.querySelector("[ upload-image-input]");
	const uploadImagePreview = document.querySelector("[upload-image-preview]");

	uploadImageInput.addEventListener("change", (e) => {
		const file = e.target.files[0];
		if(file){
			uploadImagePreview.src = URL.createObjectURL(file);
		}
	}) 
}
//End Upload Image
