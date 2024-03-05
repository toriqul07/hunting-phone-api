const loadphone = async (searchText,isShowAll)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json();
    const phones=data.data;
    displayPhones(phones,isShowAll);
}

const displayPhones = (phones,isShowAll) =>{
    //step 1:finding the id 
    const phoneContainer=document.getElementById('phone-container');
    //clear phone container cards before adding new cards
    phoneContainer.textContent='';
    //display show all button if there are more than 12 phones
    const showAllContainer=document.getElementById('show-all-container');
    if(phones.length>12 && !isShowAll )
    {
        showAllContainer.classList.remove('hidden');
    }
    else
    {
        showAllContainer.classList.add('hidden');
    }
    console.log('isShowAll',isShowAll);
    //display only first 12 phones if not show All
    if(!isShowAll)
    {
        phones=phones.slice(0,12);
    }
    // console.log(phones);
    phones.forEach(phone =>{
        console.log(phone);
        // step 2 create a div
        const phoneCard=document.createElement('div');
        phoneCard.classList =`card bg-gray-100 p-4 shadow-xl`;
        //step 3 set inner html
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        `;
        //step 4 append child
        phoneContainer.appendChild(phoneCard);
    });
    //hide loading spinner
    toggleLoadingSpinner(false);
}
//handle search button
const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true);
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText);
    loadphone(searchText,isShowAll);
}
// const handleSearch2 = () =>{
//     toggleLoadingSpinner(true);
//     const searchField=document.getElementById('search-field2');
//     const searchText=searchField.value;
//     loadphone(searchText);
// }
const toggleLoadingSpinner = (isLoading)=>{
    const loadingSpineer=document.getElementById('loading-spinner');
    if(isLoading)
    {
        loadingSpineer.classList.remove('hidden');
    }
    else
    {
        loadingSpineer.classList.add('hidden');
    }
}
const handleShowAll = () =>{
    handleSearch(true);
}
// loadphone();