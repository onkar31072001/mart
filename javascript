document.getElementById('info-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get user input values
  const pesticideName = document.getElementById('pesticide-name').value;
  const farmSize = document.getElementById('farm-size').value;

  // Simulate response based on user input
  const responseText = `You have requested information for ${pesticideName}. 
                        For a farm size of ${farmSize} acres, the pricing information will be provided soon.`;

  // Show the response message
  const responseDiv = document.getElementById('query-response');
  const responseElement = document.getElementById('response-text');
  responseElement.textContent = responseText;
  responseDiv.classList.remove('hidden');
});
