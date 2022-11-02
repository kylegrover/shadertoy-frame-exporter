function injectScript(file, node = 'body') {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
function injectScriptBlock(content, node = 'body') {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.innerHTML = content;
    th.appendChild(s);
}
injectScript( chrome.runtime.getURL('/lib/FileSaver-2.0.4.min.js'));
injectScript( chrome.runtime.getURL('/lib/ffmpeg/ffmpeg.min.js'));
injectScript( chrome.runtime.getURL('/lib/jszip.min.js'));

// ffmpegwasm:
injectScriptBlock(`var ffmpegcore_url = "${chrome.runtime.getURL('lib/ffmpeg/ffmpeg-core.js')}"`);

injectScript( chrome.runtime.getURL('/main.js'));
