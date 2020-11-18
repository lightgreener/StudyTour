require'pry'

groucho ={
    :name => 'gru'
    :instrument => 'piano'
}

chico = {
    :name => 'chico'
    :instrument => 'harp'
}

def pla (player)
    "#{ player[:name]} plays the #{ player[:instrument]}"
end


# 创建 class  很简单
# class zhangsuo_family
# end

# 创建 并 创建方法 
class zhangsuo_family

#   macro 
attr_accessor  :name, :instrument, :vice

    # setter
    def name= (n)
        @name = n
    end

    def instrument= (i)
        @instrument = i
    end


    
    # getter
    def name
        @name
    end

    def instrument
        @instrument
    end


end

# inheritate

class family 
    "it is our family"
end

liz = zhangsuo_family.new 




binding.pry