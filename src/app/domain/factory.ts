import User from './user';
import Repository from './repository';
import Milestone from './milestone';
import Label from './label';
import Issue from './issue';

export default class Factory {
  constructor() {
  }

  public translate(type:any, data:any) {
    switch (type.toLowerCase()) {
      case 'user':
        return (this.isArray(data)) ? data.map(data => this.transformUser(data)) : this.transformUser(data);

      case 'repository':
        return (this.isArray(data)) ? data.map(data => this.transformRepository(data)) : this.transformRepository(data);

      // TODO: go on
      case 'milestone':
        return data.map(r => {
          return new Milestone();
        });

      case 'label':
        return data.map(r => {
          return new Label();
        });

      case 'issue':
        return data.map(r => {
          return new Issue()
        });

      default:
        return null;
    }
  }

  private isArray(data:any) {
    return data.constructor === Array;
  }

  private transformUser(data:any) {
    const user = new User();
    user.id = data.github.id || '';
    user.email = data.github.email || '';
    user.username = data.github.username || '';
    user.name = data.github.displayName || '';
    user.profileImage = data.github.profileImageURL || '';
    user.accessToken = data.github.accessToken || '';

    return user;
  }

  private transformRepository(r) {
    return new Repository()
  }
}
