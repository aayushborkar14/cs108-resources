# RegEx (Regular Expressions) Cheat Sheet

| Common tokens | RegEx |
|---|---|
| A single character of: a, b or c | `[abc]` |
| A character except: a, b or c | `[^abc]` |
| A character in the range: a-z | `[a-z]` |
| A character not in the range: a-z | `[^a-z]` |
| A character in the range: a-z or A-Z | `[a-zA-Z]` |
| Any single character | `.` |
| Alternate - match either a or b | `a|b` |
| Any whitespace character | `\s` |
| Any non-whitespace character | `\S` |
| Any digit | `\d` |
| Any non-digit | `\D` |
| Any word character | `\w` |
| Any non-word character | `\W` |
| Match everything enclosed | `(?:...)` |
| Capture everything enclosed | `(...)` |
| Zero or one of a | `a?` |
| Zero or more of a | `a*` |
| One or more of a | `a+` |
| Exactly 3 of a | `a{3}` |
| 3 or more of a | `a{3,}` |
| Between 3 and 6 of a | `a{3,6}` |
| Start of string | `^` |
| End of string | `$` |
| A word boundary | `\b` |
| Non-word boundary | `\B` |
