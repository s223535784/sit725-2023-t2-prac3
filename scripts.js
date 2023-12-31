const cardList = [{
    title: 'Winter',
    path: 'images/winter2.jpg',
    subTitle: 'Click to know about Winter',
    description: 'Symbolizing stillness and contemplation, winter is the coldest season, with shorter days and longer nights. Many regions experience snowfall, covering the landscape in a blanket of white. Animals may hibernate or adapt to the harsh conditions, while people engage in indoor activities and festive celebrations during the holiday season.'
},
{
    title: 'Spring',
    path: 'images/spring.jpg',
    subTitle: 'Click to know about Spring',
    description: 'Symbolizing renewal and rebirth, spring marks the transition from winter to summer. The days gradually become longer, and temperatures rise, thawing the frozen landscape. Plants awaken from dormancy, and flowers bloom, painting the world with vibrant colors. Its a season of growth and new beginnings.'
},
{
    title: 'Autumn',
    path: 'images/autumn.jpg',
    subTitle: 'Click to know about Autumn',
    description: 'Often associated with change and reflection, autumn is the season of transformation. Trees shed their leaves, creating a spectacular display of colors before winter sets in. The air becomes crisper, and days gradually shorten. Harvest festivals celebrate the bounty of the land, and its a time to prepare for the colder months ahead.'
}];

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.subTitle+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const formSumitted = () => {
    let formData = {};
    formData.firstName = $('#first_name').val();
    formData.lastName = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log(formData);
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSumitted();
    });
    addCards(cardList);
    $('.modal').modal();
});