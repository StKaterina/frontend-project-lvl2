### Hexlet tests and linter status:

[![Actions Status](https://github.com/StKaterina/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/StKaterina/frontend-project-lvl2/actions)
<a href="https://codeclimate.com/github/StKaterina/frontend-project-lvl2"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>
<a href="https://codeclimate.com/github/StKaterina/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/3d443cc6d14e46e11ba5/test_coverage" /></a>

<h1>Gendiff</h1>
<h2>Installation:</h2>
<p>Clone this repository to your computer <code>git clone</code>. At the command line, install the package <code>sudo npm install</code> (Node.js must be installed).</p>
<h2>Examples</h2>
<h3>Comparing two plain JSON files</h3>
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

<h3>Comparing two plain YAML files</h3>
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
