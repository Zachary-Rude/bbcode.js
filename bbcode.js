import * as scratchblocks from 'https://scratchblocks.github.io/js/scratchblocks-v3.5.2-min.js';

var bbcode_parser = new BBCode({
    '\\[br\\]': '<br>',

    '\\[b\\](.+?)\\[/b\\]': '<b>$1</b>',
    '\\[i\\](.+?)\\[/i\\]': '<i>$1</i>',
    '\\[u\\](.+?)\\[/u\\]': '<u>$1</u>',
    '\\[s\\](.+?)\\[/s\\]': '<strike>$1</strike>',

    '\\[h1\\](.+?)\\[/h1\\]': '<h1>$1</h1>',
    '\\[h2\\](.+?)\\[/h2\\]': '<h2>$1</h2>',
    '\\[h3\\](.+?)\\[/h3\\]': '<h3>$1</h3>',
    '\\[h4\\](.+?)\\[/h4\\]': '<h4>$1</h4>',
    '\\[h5\\](.+?)\\[/h5\\]': '<h5>$1</h5>',
    '\\[h6\\](.+?)\\[/h6\\]': '<h6>$1</h6>',

    '\\[p\\](.+?)\\[/p\\]': '<p>$1</p>',

    '\\[color=(.+?)\\](.+?)\\[/color\\]':  '<span style="color:$1">$2</span>',
    '\\[size=([0-9]+)\\](.+?)\\[/size\\]': '<span style="font-size:$1px">$2</span>',

    '\\[img\\](.+?)\\[/img\\]': '<img src="$1" />',
    '\\[img=(.+?)\\]':          '<img src="$1" />',

    '\\[email\\](.+?)\\[/email\\]':       '<a href="mailto:$1" target="_blank">$1</a>',
    '\\[email=(.+?)\\](.+?)\\[/email\\]': '<a href="mailto:$1" target="_blank">$2</a>',

    '\\[url\\](.+?)\\[/url\\]':                      '<a href="$1">$1</a>',
    '\\[url=(.+?)\\|onclick\\](.+?)\\[/url\\]':      '<a onclick="$1">$2</a>',
    '\\[url=(.+?)\\starget=(.+?)\\](.+?)\\[/url\\]': '<a href="$1" target="$2">$3</a>',
    '\\[url=(.+?)\\](.+?)\\[/url\\]':                '<a href="$1">$2</a>',

    '\\[a=(.+?)\\](.+?)\\[/a\\]': '<a href="$1" name="$1">$2</a>',

    '\\[list\\](.+?)\\[/list\\]': '<ul>$1</ul>',
    '\\[\\*\\](.+?)\\[/\\*\\]':   '<li>$1</li>',
  
    ':)': '😀',
    '=)': '😃',
    ':|': '😐',
    ':(': '😥',
    ':D': '😄',
    ':O': '😮',
    ':o': '😮',
    ';)': '😉',
    ':/': '😕',
    ':P': '😛',
    ':lol:': '😂',
    ':mad:': '😠',
    ':rolleyes:': '🙄',
    ':cool:': '😎',
  
    '\\[scratchblocks\\](.+?)\\[/scratchblocks\\]': '<pre class="blocks">$1</pre>'
});
var obj = {
  style: 'scratch3',
  script: document.getElementsByClassName("blocks").innerHTML,
  lang: 'en'
};
var preview = document.getElementById("preview");
// render code
  var doc = window.doc = scratchblocks.parse(obj.script, {
    languages: obj.lang ? ['en', obj.lang] : ['en']
  });
  var docView = scratchblocks.newView(doc, {
    style: obj.style
  })
  var svg = docView.render()
  preview.appendChild(svg);
