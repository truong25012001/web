// ChangeStatus
const buttonChangeStatus = document.querySelectorAll("[button-change-status]");
if(buttonChangeStatus.length > 0)  {
	buttonChangeStatus.forEach(button => {
		button.addEventListener("click", () => {
			const statusCurrent = button.getAttribute('data-status');
			const id = button.getAttribute("data-id");

			let statusChange = statusCurrent == "active"? "inactive" : "active";
			
			const formChangeStatus = document.querySelector("#form-change-status");
			const dataPatch = formChangeStatus.getAttribute("data-patch");


			console.log(dataPatch);
			const action = dataPatch + `/${statusChange}/${id}?_method=PATCH`;
			formChangeStatus.action = action;
			formChangeStatus.submit();
		});
	});

	
}

//End ChangeStatus


// Delete Items
const buttonDelete = document.querySelectorAll("[button-delete]");

if(buttonDelete.length > 0) {
	const formDeleteItems = document.querySelector("#form-delete-items");
	buttonDelete.forEach(button => {
		button.addEventListener("click", () => {
			 const isConfirm = confirm(" Bạn có chắc muốn xóa sản phẩm này ?");
			 if(isConfirm){
				const id = button.getAttribute("data-id");
				const dataPatch = formDeleteItems.getAttribute("data-patch");
				const action =  `${dataPatch}/${id}?_method=DELETE`;
				formDeleteItems.action = action;
				formDeleteItems.submit();
			 }
		})
	})
}



// End Delete Items

// Restore Items
const buttonReStore = document.querySelectorAll("[button-restore]");
const formReStore = document.querySelector("#form-restore-items");
console.log(buttonReStore);
if(buttonReStore) {
	buttonReStore.forEach(button => {
		button.addEventListener("click", () => {
			const isReStore = confirm("Bạn có muốn khôi phục sản phẩm này không?");
			if(isReStore){
				const id = button.getAttribute("data-id");
				const dataPatch = formReStore.getAttribute("data-patch");
				const action = `${dataPatch}/${id}?_method=PATCH`;
				formReStore.action = action;
				formReStore.submit();
				console.log(dataPatch);
				console.log(id);
			}
		})
	})
}