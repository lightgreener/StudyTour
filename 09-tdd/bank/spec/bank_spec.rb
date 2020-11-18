require_relative '../bank.rb'

describe Bank do
    let(:bank) { Bank.new 'TDD Bank'}

    describe '.new' do
        it 'create a new bank object' do
            # turn that english to ruby
            # bank = Bank.new 'TDD Bank'
            expect(bank).to_not be nil
        end

        it 'assigns the bank a name' do
            # bank = Bank.new 'TDD Bank'
            expect(bank.name).to eq 'TDD Bank'
        end
    end

    describe '#create_account' do
        it 'create an account for a user' do
            # bank = Bank.new 'TDD Bank'
            bank.create_account 'craigsy', 7
            expect(bank.accounts['craigsy']).to eq 7
        end
    end

    describe "#deposit" do
        # create a account
        it 'deposit money into a user' do
            bank.create_account 'Jonesy', 200
            # deposit  money
            bank.deposit 'Jonesy',300
            #
            expect(bank.accounts['Jonesy']).to eq 200+300
        end
    end

    describe '#withdraw' do
        it 'withdraw an amount from a user' do
            bank.create_account 'Max',1000
            bank.withdraw 'Max', 800
            expect(bank.accounts['Max']).to eq 200
        end

        it 'ignores withdraws that exceed the balance' do
            bank.create_account 'Cladys', 1
            bank.withdraw 'Cladys',1_000_000
            expect(bank.balance 'Cladys').to eq 1
        end
    end

    describe '#balance' do
        it 'return the balance for an account' do
            bank.create_account 'Liz' ,5000
            bal = bank.balance 'Liz'
            expect(bal).to eq 5000
        end
    end


end

# b = Bank.new "GA Bank"

# dot notation - class method

# hash notation - instance method
#b = bank.new
#b.create_account
