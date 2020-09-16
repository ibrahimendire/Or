export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
  }
  shouldShowWarning () {
    if (this.type === 'Space Debris') {
        return true;
    } else if(this.name === 'Morelos III'){
        return true;
    }else if(this.name === 'Sirius 1'){
      return true;
    }else if(this.name === 'Hubble Space Telescope'){
      return true;
    }
 };
}
