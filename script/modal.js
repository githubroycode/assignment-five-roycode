
// document.querySelector('.openModalBtn').addEventListener('click', () => {
//     // Modal HTML content as a string
//     const modalHTML = `
//                 <div class="modal-container modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//                     <div class="modal-content bg-white p-8 rounded shadow-lg max-w-sm w-full text-center">
//                         <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
//                         <p class="text-gray-700 mb-4">This is a simple modal with a 0.5s transition effect.</p>
//                         <button class="closeModalBtn btn bg-red-500 text-white px-4 py-2 rounded">Close</button>
//                     </div>
//                 </div>
//             `;

//     // Append modal HTML to the body
//     document.body.insertAdjacentHTML('beforeend', modalHTML);

//     // Show modal with transition
//     setTimeout(() => {
//         document.querySelector('.modal-container').classList.add('modal-show');
//     }, 10);

//     // Close modal on button click
//     document.querySelector('.closeModalBtn').addEventListener('click', () => {
//         const modal = document.querySelector('.modal-container');
//         modal.classList.remove('modal-show');
//         setTimeout(() => {
//             modal.remove(); // Remove modal from DOM after transition
//         }, 500);
//     });

//     // Optional: Close modal when clicking outside of it
//     document.querySelector('.modal-container').addEventListener('click', (event) => {
//         if (event.target === document.querySelector('.modal-container')) {
//             const modal = document.querySelector('.modal-container');
//             modal.classList.remove('modal-show');
//             setTimeout(() => {
//                 modal.remove(); // Remove modal from DOM after transition
//             }, 500);
//         }
//     });
// });

document.getElementById('donate-btn-one').addEventListener('click', () => {
    // Modal HTML content as a string
    const modalHTML = `
        <div class="modal-container modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div class="modal-content bg-white p-8 rounded shadow-lg max-w-sm w-full text-center">
                <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
                <p class="text-gray-700 mb-4">This is a simple modal with a 0.5s transition effect.</p>
                <button class="closeModalBtn btn bg-red-500 text-white px-4 py-2 rounded">Close</button>
            </div>
        </div>
    `;

    // Append modal HTML to the body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show modal with transition
    setTimeout(() => {
        document.querySelector('.modal-container').classList.add('modal-show');
    }, 10);

    // Close modal on button click
    document.querySelector('.closeModalBtn').addEventListener('click', () => {
        const modal = document.querySelector('.modal-container');
        modal.classList.remove('modal-show');
        setTimeout(() => {
            modal.remove(); // Remove modal from DOM after transition
        }, 500);
    });

    // Optional: Close modal when clicking outside of it
    // document.querySelector('.modal-container').addEventListener('click', (event) => {
    //     if (event.target === document.querySelector('.modal-container')) {
    //         const modal = document.querySelector('.modal-container');
    //         modal.classList.remove('modal-show');
    //         setTimeout(() => {
    //             modal.remove(); // Remove modal from DOM after transition
    //         }, 500);
    //     }
    // });
});
