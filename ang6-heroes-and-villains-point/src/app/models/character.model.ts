import { CharacterStatistic } from './character-statistic.model';

export class CharacterModel {
  public id: number;
  public name: string;
  public description: string;
  public biography: string;
  public modified: Date;
  public favorite: string;
  public pathThumbnail: string;
  public classification: CharacterStatistic;
}
