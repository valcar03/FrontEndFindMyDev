$(document).ready(function () {
    // When clicking on select all then select all checkboxes
    $("#select-all-checkbox").click(function () {
      $('input[name="checkbox-input"]').prop("checked", $(this).prop("checked"));
    });
  
    $('input[name="checkbox-input"]').click(function () {
      // If not all checkboxes are selected then uncheck select all
      if (!$(this).prop("checked")) {
        $("#select-all-checkbox").prop("checked", false);
      }
      // If all checkboxes are selected then check select all
      if (
        $('input[name="checkbox-input"]:checked').length ==
        $('input[name="checkbox-input"]').length
      ) {
        $("#select-all-checkbox").prop("checked", true);
      }
    });
  
    // When click save the modal
    let CheckBoxListStorage;
    selectedCheckBoxes = () => {
      let selectedCheckBoxesList = [];
      $('input[name="checkbox-input"]:checked').each(function () {
        selectedCheckBoxesList.push($(this).attr("id"));
      });
      // console.log(selectedCheckBoxesList);
      CheckBoxListStorage = selectedCheckBoxesList;
    };
  
    // When close the modal save the old state of checkboxes when close the modal
    $("#modal-id").on("hidden.bs.modal", function () {
      $('input[name="checkbox-input"]').prop("checked", false);
      for (let item = 0; item < CheckBoxListStorage.length; item++) {
        $(
          'input[name="checkbox-input"][id="' + CheckBoxListStorage[item] + '"]'
        ).prop("checked", true);
      }
      if (
        $('input[name="checkbox-input"]:checked').length !=
        $('input[name="checkbox-input"]').length
      ) {
        $("#select-all-checkbox").prop("checked", false);
      } else {
        $("#select-all-checkbox").prop("checked", true);
      }
    });
  });