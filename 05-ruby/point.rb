require'pry'

# ## Point Mutations

# A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.

# The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.

# By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.

# This is called the 'Hamming distance'

# ```
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# ```

# The Hamming distance between these two DNA strands is 7.

# Write a program that can calculate the Hamming difference between two DNA strands.

# ### Source

# The Calculating Point Mutations problem at [Rosalind](http://rosalind.info/problems/hamm/)

array1 = gets.chomp.upcase.split('')
array2 = gets.chomp.upcase.split('')
newArray = []
count = 0
index = 0
def hamming (a=[], b=[],index = 0,count =0)
    until index == a.size
        # a.each do |element|
        if a.shift != b.shift
            count += 1;
            a = a.drop(1)
            b = b.drop(1)
        end
    end
    puts count
end


hamming(array1,array2)
binding.pry




#两个数组 比较 求不同的元素

