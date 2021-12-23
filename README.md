### Hexlet tests and linter status:

[![Actions Status](https://github.com/StKaterina/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/StKaterina/frontend-project-lvl2/actions)
<a href="https://codeclimate.com/github/StKaterina/frontend-project-lvl2"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>
<a href="https://codeclimate.com/github/StKaterina/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/3d443cc6d14e46e11ba5/test_coverage" /></a>

<h1>Gendiff</h1>
<h2>Installation:</h2>
<pre>
git clone git@github.com:StKaterina/frontend-project-lvl2.git
cd frontend-project-lvl2
make install
make link
</pre>

<h2>Examples</h2>

<h3>Comparing two JSON files</h3>

<p>file1.json</p>
<pre><code>
{
 "host": "hexlet.io",
 "timeout": 50,
 "proxy": "123.234.53.22",
 "follow": false
}
 </code></pre>
 
<p>file2.json</p>
<pre><code>
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
</code></pre>
<p><a href="https://asciinema.org/a/subt7xLn7VLvWhHVM3qxZVQ6E" target="_blank"><img src="https://asciinema.org/a/subt7xLn7VLvWhHVM3qxZVQ6E.svg" /></a></p>


<h3>Comparing two YAML files</h3>

<p>file1.yml</p>
<pre><code>
host: hexlet.io
timeout: 50
proxy: 123.234.53.22
follow: false
</code></pre>

<p>file2.yml</p>
<pre><code>
timeout: 20
verbose: true
host: "hexlet.io"
</code></pre>
<p><a href="https://asciinema.org/a/W2RI2vKHEoSMocu0Gwl5UnJ68" target="_blank"><img src="https://asciinema.org/a/W2RI2vKHEoSMocu0Gwl5UnJ68.svg" /></a></p>

<h3>Recursive comparison of two nested files</h3>

<p>file3.json</p>
<pre><code>
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}
</code></pre>

<p>file4.json</p>
<pre><code>
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
</code></pre>

<h4>Nested format:</h4>
<p><a href="https://asciinema.org/a/qNoJ55DM8n9aOp0mExxLkUGq3" target="_blank"><img src="https://asciinema.org/a/qNoJ55DM8n9aOp0mExxLkUGq3.svg" /></a></p>

<h4>Flat format:</h4>
<p><a href="https://asciinema.org/a/r6uzJiYiZLY3OVLeHU22arGCX" target="_blank"><img src="https://asciinema.org/a/r6uzJiYiZLY3OVLeHU22arGCX.svg" /></a></p>

<h4>Json format:</h4>
<p><a href="https://asciinema.org/a/PX6p4attvG8EylUnQuI5raf9q" target="_blank"><img src="https://asciinema.org/a/PX6p4attvG8EylUnQuI5raf9q.svg" /></a></p>
