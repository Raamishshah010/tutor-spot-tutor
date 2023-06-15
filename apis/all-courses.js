var settings = {
    "url": "http://localhost:5000/api/course/",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    console.log(response);

    response.data.forEach(function (item) {
        $('#coursesTable').append(`
        <tr>
        <td>
        <div class="d-flex px-2 py-1">
            
            <div class="d-flex flex-column justify-content-center">
            
            <p class="text-xs font-weight-bold mb-0">${item.title}</p>
            
            </div>
        </div>
        </td>
        <td>
        <p class="text-xs font-weight-bold mb-0">${item.description.slice(0,22)}...</p>
        
        </td>
        
        <td class="align-middle text-center text-sm">
        <span class="badge badge-sm bg-gradient-success">Online</span>
        </td>
        <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">Rs ${item.price}</span>
        </td>
        <td class="align-middle">
        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
            Edit
        </a>
        </td>
    </tr>
        
        `)
    })


    
});