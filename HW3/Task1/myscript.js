function onCreate(ev) {
    ev.preventDefault();
    
    var radioValue = $("input[name='cgroupOfDefaultRadios']:checked").val();

    var data = JSON.stringify({
        "title": String(document.getElementById("ctitle").value),
        "author": String(document.getElementById("cauthor").value),
        "numberOfPages": String(document.getElementById("cnumberOfPages").value),
        "dataCarrier": String(radioValue)
    });
    
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert(this.responseText);
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        }
    });

  //The real IP adress was replaced for safety
    xhr.open("POST", "http://IP adress:2403/books5kush");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    console.log('allah');
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
             result = JSON.parse(this.response);
            var resultTBody = document.createElement('tbody');
            result.map(function (nthBOOKS5KUSH) {
                resultTBody.appendChild(parseBookToTableRow(nthBOOKS5KUSH));
            });

            var table = document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody, document.getElementById('rTBody'));
            resultTBody.id = 'rTBody';
            console.log('success');
        }
    });

    //The real IP adress was replaced for safety
    xhr.open("GET", "http://IP adress:2403/books5kush");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(ev) {

    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            result = JSON.parse(this.response);
            var ids = document.createElement('select');
            ids.className = 'form-control';
            result.map(function (nthBOOKS5KUSH) {
                var id = document.createElement('option');
                id.innerHTML = nthBOOKS5KUSH['id'];
                ids.appendChild(id);
            });
            var form = document.getElementById('uid').parentElement;
            form.replaceChild(ids, document.getElementById('uid'));
            ids.id = 'uid';
        }
    });
    //The real IP adress was replaced for safety
    xhrids.open("GET", "http://IP adress:2403/books5kush/");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();

    var uradioValue = $("input[name='ugroupOfDefaultRadios']:checked").val();
    var data = JSON.stringify({
        "title": String(document.getElementById("utitle").value),
        "author": String(document.getElementById("uauthor").value),
        "numberOfPages": String(document.getElementById("unumberOfPages").value),
        "dataCarrier": String(uradioValue)
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    //The real IP adress was replaced for safety
    xhr.open("PUT", "http://IP adress:2403/books5kush/" + document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onDelete(ev) {
    ev.preventDefault();
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    //The real IP adress was replaced for safety
    xhr.open("DELETE", "http://IP adress/books5kush/" + document.getElementById("did").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseBookToTableRow(BOOKS5KUSH) {
    var row = document.createElement('tr');

    id = document.createElement('th');
    id.innerText = BOOKS5KUSH['id'];
    row.appendChild(id);

    title = document.createElement('td');
    title.innerText = BOOKS5KUSH['title'];
    row.appendChild(title);

    author = document.createElement('td');
    author.innerText = BOOKS5KUSH['author'];
    row.appendChild(author);

    numberOfPages = document.createElement('td');
    numberOfPages.innerText = BOOKS5KUSH['numberOfPages'];
    row.appendChild(numberOfPages);

    dataCarrier = document.createElement('td');
    dataCarrier.innerText = BOOKS5KUSH['dataCarrier'];
    row.appendChild(dataCarrier);

    return row;
}


window.onload=function () {

    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );
    document.getElementById('ubutton').addEventListener(
        'click', onUpdate
    );
    document.getElementById('pubutton').addEventListener(
        'click', onPrepareUpdate
    );
    document.getElementById('dbutton').addEventListener(
        'click', onDelete
    );
    console.log('Handlers is set')
}