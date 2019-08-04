import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppsService {
  constructor(private httpService: HttpService) {}

  find(): Promise<any> {
    return this.httpService.get('/apps/').toPromise()
  }

  save({ name, target, app_types }): Promise<any> {
    return this.httpService.post('/apps/', { name, target, app_types }).toPromise()
  }

  getDashboard({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/dashboard`).toPromise()
  }

  getMessageData({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/messages/unread`).toPromise()
  }

  findMessages({ id, type, page }): Promise<any> {
    return this.httpService.get(`/apps/${id}/messages/${type}/`, {
      data: { page }
    }).toPromise()
  }

  findFilters({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/filters/`).toPromise()
  }

  findMembers({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/members/`).toPromise()
  }

  findModules({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/modules/`).toPromise()
  }

  findWords({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/keywords`).toPromise()
  }

  saveWords({ app_id, name }): Promise<any> {
    return this.httpService.post(`/apps/${app_id}/keywords`, { app_id, name }).toPromise()
  }

  findVersions({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/versions`).toPromise()
  }

  saveVersions({ id, version_id, version_code }): Promise<any> {
    return this.httpService.post(`/apps/${id}/versions`, { version_id, version_code }).toPromise()
  }

  findFeeds({ id, tag_id, page }): Promise<any> {
    return this.httpService.get(`/apps/${id}/feeds/`, {
      data: { tag_id, page }
    }).toPromise()
  }

  findIssues({ id, flags, members, page }): Promise<any> {
    return this.httpService.get(`/apps/${id}/issues/`, {
      data: { flags, members, page }
    }).toPromise()
  }

  findOneIssue({id, issueId}): Promise<any> {
    return this.httpService.get(`/apps/${id}/issues/${issueId}`).toPromise()
  }

  saveIssues({ id, title, description, type, priority, dev_uid, mid, version_id, snapshots, keyword_ids, screen, platform }): Promise<any> {
    return this.httpService.post(`/apps/${id}/issues`, {
      title,
      description,
      type,
      priority,
      dev_uid,
      mid,
      version_id,
      snapshots,
      keyword_ids,
      screen,
      platform
    }).toPromise()
  }

  getIssueCount({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/issues/page/`).toPromise()
  }

  saveTag({ id, issueId, tagId, title, description, type, priority, dev_uid, mid, version_id, snapshots, keyword_ids, screen, platform }): Promise<any> {
    return this.httpService.post(`/apps/${id}/issues/${issueId}/${tagId}`, {
      data: {
        title,
        description,
        type,
        priority,
        dev_uid,
        mid,
        version_id,
        snapshots,
        keyword_ids,
        screen,
        platform
      }
    }).toPromise()
  }

  saveRepeatTag({ id, issueId, tagId, tagetIssueId, targetTagId, keyword }): Promise<any> {
    return this.httpService.post(`/apps/${id}/issues/${issueId}/tags/${tagId}/repeat`, {
      data: {
        issue_id: tagetIssueId,
        tag_id: targetTagId,
        keyword
      }
    }).toPromise()
  }

  findSearchSuggest({ id, keyword }): Promise<any> {
    return this.httpService.get(`/apps/${id}/search/suggest`, {
      data: {
        keyword
      }
    }).toPromise()
  }

  findWebhooks({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/webhooks/`).toPromise()
  }
}