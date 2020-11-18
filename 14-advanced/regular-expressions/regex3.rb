# [6] Make a program that prints each line of its input that contains a period (.), ignoring other lines of input. Try it on the small text file from the previous exercise: does it notice Mr. Slate?


ARGF.each do |line|
    puts line if line =~ /\./    # 这里需要转译字符 \
    # puts line if line =~ / [.] / #  [.] 也可以
end
