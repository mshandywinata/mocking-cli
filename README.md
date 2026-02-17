# mocking-cli

A terminal-based utility that transforms text into the mOcKiNg sArCaSm format.

> "Stop being so serious." → sToP bEiNg sO sErIoUs

## Overview

A lightweight Node.js utility designed to practice String Manipulation and CLI Argument Handling. It uses a stateful toggle to ensure a consistent alternating pattern, even with spaces and punctuation.

## Installation

```bash
git clone https://github.com/mshandywinata/mocking-cli.git
cd mocking-cli
npm link
```

## Usage

```bash
mocking-cli <string>
```

### Examples

```bash
mocking-cli hello, world!        # HeLlO, wOrLd!
```

### Sample Output

```
HeLlO, wOrLd!
```

## Logic

1. Split the input into characters.
2. Toggle case only when encountering a letter [a-zA-Z].
3. Ignore spaces, numbers, and symbols (preserve their original form).
4. Join and output.
