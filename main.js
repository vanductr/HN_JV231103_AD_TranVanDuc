document.addEventListener('DOMContentLoaded', function () {
    let saveButton = document.getElementById('saveButton');
    let dataTableBody = document.getElementById('dataTableBody');
  
    saveButton.addEventListener('click', function () {
      let cardNumber = document.getElementById('inputField').value;
      let expiryDate = document.getElementById('expiryField').value;
      let cvv = document.getElementById('cvvField').value;
  
      
      if (!cardNumber || !expiryDate || !cvv) {
        console.error('Invalid card information.');
        return;
      }
  
      
      let newRow = dataTableBody.insertRow();
  
      
      let newCardNumberCell = newRow.insertCell(0);
      let newExpiryDateCell = newRow.insertCell(1);
      let newCVVCell = newRow.insertCell(2);
      let newActionCell = newRow.insertCell(3);
  
      
      let hiddenCardNumber = cardNumber.substring(0, cardNumber.length - 6) + '******';
      newCardNumberCell.textContent = hiddenCardNumber;
  
      let maskedCVV = '*'.repeat(cvv.length);
      newCVVCell.textContent = maskedCVV;
      
  
      newExpiryDateCell.textContent = expiryDate;
  
      
      let viewButton = document.createElement('button');
      viewButton.textContent = 'Xem';
      viewButton.addEventListener('click', function () {
        alert(`Card Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`);
      });
  
      let editButton = document.createElement('button');
      editButton.textContent = 'Sửa';
      editButton.addEventListener('click', function () {
        document.getElementById('inputField').value = cardNumber;
        document.getElementById('expiryField').value = expiryDate;
        document.getElementById('cvvField').value = cvv;
        newRow.remove();
      });
  
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Xoá';
      deleteButton.addEventListener('click', function () {
        newRow.remove();
      });
  
      
      newActionCell.appendChild(viewButton);
      newActionCell.appendChild(editButton);
      newActionCell.appendChild(deleteButton);
  
      
      document.getElementById('inputField').value = '';
      document.getElementById('expiryField').value = '';
      document.getElementById('cvvField').value = '';
    });
  });
  