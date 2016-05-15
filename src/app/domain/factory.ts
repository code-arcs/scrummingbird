import User from './user';
import Repository from './repository';
import Milestone from './milestone';
import Label from './label';
import Issue from './issue';
import Comment from './comment';

export default class Factory {
  constructor() {
  }

  public translate(type:any, data:any = {}) {

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

      case 'comment':
        return (this.isArray(data)) ? data.map(data => this.transformComment(data)) : this.transformComment(data);

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
    repo.ownerName = data.owner.login;
    repo.url = data.url;
    repo.fullName = data.full_name;

    return repo;
  }

  private transformMilestone(data:any) {
    const mile = new Milestone();
    mile.id = data.id || '';
    mile.number = data.number || '';
    mile.state = data.state || '';
    mile.title = data.title || '';
    mile.description = data.description || '';
    mile.openIssues = data.open_issues || 0;
    mile.closedIssues = data.closed_issues || 0;

    return mile;

  }

  private transformLabel(data:any) {
    const label = new Label();
    label.name = data.name;
    label.color = data.color;
    label.url = data.url;
    return label;
  }

  private transformComment(data:any) {
    const comment = new Comment();
    comment.id = data.id;
    comment.user = data.user;
    comment.body = data.body;
    comment.url = data.url;
    comment.updatedAt = new Date(data.updated_at);
    comment.createdAt = new Date(data.created_at);
    console.log(data.update_at)
    return comment;
  }

  private transformIssue(data:any) {
    const issue = new Issue();
    issue.id = data.id || '';
    issue.number = data.number || '';
    issue.state = data.state || '';
    issue.title = data.title || '';
    issue.body = data.body || '';
    issue.assignee = data.assignee ? data.assignee.login : '';

    issue.labels = data.labels ? this.translate('label', data.labels) : [];
    issue.milestone = data.milestone ? this.translate('milestone', data.milestone) : null;
    issue.repository = data.repository ? this.translate('repository', data.repository) : null;
    issue.commentCount = data.comments ? data.comments : 0;
    return issue;
  }
}
