# for i in *.jpg
# do
# djpeg $i | pnmscale -xysize 48 38 | cjpeg -opti -progr -qual ‘75%’ > TN_$i
# echo $i processed
# done

FILES="$@"
for DIR in 1 2 3
do
  for i in ./public/img/portfolio/$DIR/*.JPG
  do
  # echo "Processing image $i"
  f="$(basename -- $i)"
  echo "$f"
  # /usr/bin/convert -thumbnail 200 $i thumb.$i
  done
done