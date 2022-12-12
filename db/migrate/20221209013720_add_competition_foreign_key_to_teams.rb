class AddCompetitionForeignKeyToTeams < ActiveRecord::Migration[6.1]
  def change
    add_column :teams, :competition_id, :integer
  end
end
