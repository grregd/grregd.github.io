function generate_main_menu()
{
    const text_hrefs = [
        ["index", "index.html", "index"],
        ["Subject1", "subject1.html", "subject1"],
        ["Subject2", "subject2.html", "subject2"],
        ["Subject3", "subject3.html", "subject3"],
    ];
    var main_menu = document.getElementById("main_menu");
    const page_id = document.body.id;
    for (const text_href of text_hrefs) {
        var node_a = document.createElement("a");
        if (node_a) {
            node_a.text = text_href[0];
            node_a.href = text_href[1];
            if (page_id == text_href[2])
                node_a.classList.add("current");
            main_menu.appendChild(node_a);
        }
    }
}

window.onload = generate_main_menu;
