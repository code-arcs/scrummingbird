import User from './user';
import Repository from './repository';
import Milestone from './milestone';
import Label from './label';
import Issue from './issue';

export default class Factory {
  constructor() {
  }

  public translate(type:any, data:any = {}) {

    console.log(type, data);
    if (this.isArray(data) && data.length === 0) {

      return null;
    }

    switch (type.toLowerCase()) {
      case 'user':
        return (this.isArray(data)) ? data.map(data => this.transformUser(data)) : this.transformUser(data);

      case 'repository':
        return (this.isArray(data)) ? data.map(data => this.transformRepository(data)) : this.transformRepository(data);

      case 'milestone':
        return (this.isArray(data)) ? data.map(data => this.transformMilestone(data)) : this.transformMilestone(data);

      case 'label':
        return (this.isArray(data)) ? data.map(data => this.transformLabel(data)) : this.transformLabel(data);

      case 'issue':
        return (this.isArray(data)) ? data.map(data => this.transformIssue(data)) : this.transformIssue(data);

      default:
        return null;
    }
  }

  private isArray(data:any) {
    return data && data.constructor === Array;
  }

  private transformUser(data:any = {github: {}}) {
    const user = new User();
    user.id = data.github.id || '';
    user.email = data.github.email || '';
    user.username = data.github.username || '';
    user.name = data.github.displayName || '';
    user.profileImage = data.github.profileImageURL || '';
    user.accessToken = data.github.accessToken || '';

    return user;
  }

  private transformRepository(data:any) {
    const repo = new Repository();
    repo.id = data.id;
    repo.name = data.name;
    repo.description = data.description;
    repo.open_issues = data.open_issues;
    repo.ownerId = data.owner.id;
    repo.url = data.url;
    repo.fullName = data.full_name;

    return repo;
  }

  private transformMilestone(data:any) {
    const mile = new Milestone();

    mile.id = data.id || '';
    mile.number = data.id || '';
    mile.state = data.state || '';
    mile.title = data.title || '';
    mile.description = data.description || '';
    mile.openIssues = data.openIssues || '';
    mile.closedIssues = data.closedIssues || '';

    return mile;

  }

  private transformLabel(r) {
    return new Label()
  }

  private transformIssue(r) {
    return new Issue()
  }
}
