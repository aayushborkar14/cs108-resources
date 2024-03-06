sort -n -r -t ':' -k 2 data.txt > sort.txt
grep -E '[^:]*:[^:]*:jodhpur' sort.txt > extract.txt
cut -d ':' -f 1-2 --output-delimiter=$'\t' extract.txt > display.txt
tar -cvzf submission.tar.gz sort.txt extract.txt display.txt