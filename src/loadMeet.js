chrome.storage.sync.get([
    'mainButton',
    'gmeet_messages',
    'gmeet_participants',
    'gmeet_video',
    'gmeet_badge',
    'gmeet_entry',
], function (data) {
    const { 
        mainButton,
        gmeet_messages,
        gmeet_participants,
        gmeet_video,
        gmeet_entry,
        gmeet_badge
    } = data;
    function removeStyleById(id) {
        console.log(`removing style: ${id}`)
        // check whether the stylesheet is there before removing
        if (el = document.getElementById(id)) {
            el.parentNode.removeChild(el);
        }
    }

    function addStyle(id) {
        console.log(`add style for ${id}`)
        // only add stylesheets if they weren't added yet
        if (!document.getElementById(id)) {
            var link = document.createElement('link');
            link.id = id;
            link.className = 'mip';
            link.href = chrome.extension.getURL('css/' + id + '.css');
            link.type = "text/css";
            link.rel = "stylesheet";
            document.getElementsByTagName("head")[0].appendChild(link);
        }
    }

    if (mainButton) {
        // add stylesheets if selected otherwise it will be removed
        if (gmeet_messages) addStyle('gmeet_messages'); else removeStyleById('gmeet_messages');
        if (gmeet_participants) addStyle('gmeet_participants'); else removeStyleById('gmeet_participants');
        if (gmeet_video) addStyle('gmeet_video'); else removeStyleById('gmeet_video');
        if (gmeet_entry) addStyle('gmeet_entry'); else removeStyleById('gmeet_entry');
        if (gmeet_badge) addStyle('gmeet_badge'); else removeStyleById('gmeet_badge');
    } else if (document.getElementsByClassName('mip').length > 0) {
        // remove all stylesheets
        var el = document.getElementsByClassName('mip');
        while (el.length > 0) {
            el[0].parentNode.removeChild(el[0]);
        }
    }
});
