
export const Button = ( value, onClick ) => {
  
  let button = document.createElement('button');
  button.textContent = value;
  button.onclick = event => {
    // event.preventDefault();
    onClick(value)
  };
  
  return button
}