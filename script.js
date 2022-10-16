
const shareBox = document.querySelector('.share');
shareBox.style.display = "none";

const shareBtn = document.querySelector('.share-btn-container');
shareBtn.style.backgroundColor="var(--light-blue)";
shareBtn.style.color="var(--grayish-blue)";

const imageGrey = document.querySelector('.share-btn-grey');
const imageWhite = document.querySelector('.share-btn-white');

shareBtn.addEventListener('click', () => {
    if (shareBox.style.display === "flex") {
        shareBox.style.display = "none";  
        shareBtn.style.backgroundColor="var(--light-blue)";  
        imageGrey.style.display = "flex";
        imageWhite.style.display = "none";
    } else {
        shareBox.style.display = "flex"; 
        shareBtn.style.backgroundColor="var(--dark-blue)";  
        
        
        imageGrey.style.display = "none";
        imageWhite.style.display = "flex";
    }
})
