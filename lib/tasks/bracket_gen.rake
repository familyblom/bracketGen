namespace :db do
  desc "create some fake bracket data for my app"
  task bracket_populate: :environment do
    require 'populator'
    require 'faker'

    Entry.populate 16 do |entry|
      entry.name = Faker::Name.name
    end

  end
end