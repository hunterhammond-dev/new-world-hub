export class Companies {
  public CompanyId: number;
  public Leader: string;
  public Faction: string;
  public Server: string;
  public Focus: string;
  public Size: string;
  public Language: string;
  public Voice: string;
  public CompanyName: string;
  public description: string;
  public name: string;

  constructor(CompanyId: number,
              Leader: string,
              Faction: string,
              Server: string,
              Focus: string,
              Size: string,
              Language: string,
              Voice: string,
              CompanyName: string,
              name: string,
              description: string) {
    this.CompanyId = CompanyId;
    this.Leader = Leader;
    this.Faction = Faction;
    this.Server = Server;
    this.Focus = Focus;
    this.Size = Size;
    this.Language = Language;
    this.Voice = Voice;
    this.CompanyName = CompanyName;
    this.description = description;
    this.name = name;
  }
}
