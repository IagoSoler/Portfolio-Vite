export const sendEmail = (email) => {
  window.location.href = `mailto:${email}`;
};
export const copyToClipboard = (email) => {
  navigator.clipboard.writeText(email);

  const emailElement = document.querySelector(".contact--email--text");
  const range = document.createRange();
  range.selectNodeContents(emailElement);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
};
export const  chooseLanguage = (language, english, spanish) => {
 let textData
 switch (language) { 
   case 'spanish':
     textData = spanish;
     break;
   case 'english':
     textData = english;
     break;
   default:
     textData = english; 
     break;
 }
 return textData
}