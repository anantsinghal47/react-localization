

const handleEditChange = (event) => {

    if(event.target.checked){
        if(event.target.checked && absoluteSorting){
            //yha set krdo dono wale column
            //yai wala code likhdo  setColumnDefs(EditableAbsolutecoldefs);

        }

        else {
            // jo normal condition rehti hai edit ki wo lga do 
        }
    }
}

const handleAbsoluteChange = (event) => {

    if(event.target.checked){
        if(event.target.checked && unlockedChecked){
            //yha set krdo dono wale column
            //yai wala code likhdo  setColumnDefs(EditableAbsolutecoldefs);

        }

        else {
            // jo normal condition rehti hai absolute ki wo lga do 
        }
    }
}
