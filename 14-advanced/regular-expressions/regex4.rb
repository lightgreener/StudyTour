# [8] Make a program that prints each line that has a word that is capitalized but not ALL capitalized. Does it match Fred but neither fred nor FRED?


ARGF.each do |line|
    puts line if line =~/[A-Z].*red/
    # puts line if line =~/[A-Z].*[a-z]/ # 首字母是大写，后面是小写
end
