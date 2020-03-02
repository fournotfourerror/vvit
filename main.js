fetch("data.json")
.then((response)=>{
    return response.json()
}).then((data)=>{
    // console.log(data);
    display_info(data.basics);
})

var bodyElement=document.querySelector("#root");
function display_info(info){
    // Card view
    let card=document.createElement("div");
    card.classList.add("card");

    // Heading
    let heading=document.createElement("h2");
    heading.textContent=info.name;

    bodyElement.append(card);
    card.append(heading);

    let line=document.createElement("hr");
    card.append(line);

    // Role
    let role=document.createElement("h3");
    role.textContent=info.role;
    card.append(role);

    // Email
    let email=document.createElement("a");
    email.href="mailto:"+info.email;
    email.textContent=info.email;
    card.append(email);

    let br=document.createElement("br");
    let br1=document.createElement("br");
    card.append(br);
    card.append(br1);



    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);

    var button=document.createElement("a");
    button.textContent="View Profile";
    button.classList.add("btn");
    card.append(button);
}