# mocking-cli

A terminal-based utility that transforms text into the mOcKiNg sArCaSm format.

> "Stop being so serious." → sToP bEiNg sO sErIoUs

## Overview

A lightweight Node.js utility designed to practice String Manipulation and CLI Argument Handling. It uses a stateful toggle to ensure a consistent alternating pattern, even with spaces and punctuation.

## Usage

Pass your message as arguments after the script path.

Using Node.js:

```
node src/index.js "don't you have work to do?"
Output: dOn'T yOu hAvE wOrK tO dO?
```

## Logic

1. Split the input into characters.
2. Toggle case only when encountering a letter [a-zA-Z].
3. Ignore spaces, numbers, and symbols (preserve their original form).
4. Join and output.
