function handle_select(event)
{
    var main_menu = document.getElementById("main_menu");
    for (item of main_menu.children) {
        item.classList.remove("current");
    }
    event.target.classList.add("current");
}

function generate_main_menu()
{
    const text_hrefs = [
        ["Subject1", "subject1.html"],
        ["Subject2", "subject2.html"],
        ["Subject3", "subject3.html"],
    ];

    var main_menu = document.getElementById("main_menu");

    for (const text_href of text_hrefs) {
        var node_a = document.createElement("a");
        if (node_a) {
            node_a.text = text_href[0];
            node_a.href = text_href[1];
            node_a.target = "content";
            node_a.onclick = handle_select;
            main_menu.appendChild(node_a);
        }
    }
}

window.onload = generate_main_menu;
