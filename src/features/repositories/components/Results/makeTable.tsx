import Avatar from "@components/Avatar";
import Column from "@components/Column";
import Icon from "@components/Icon";
import Row from "@components/Row";
import Text from "@components/Text";
import { formatDayMonth } from "@core/dates/formats";
import type { Repository } from "@features/repositories/types";
import Link from "next/link";

export const columns = [
  {
    dataIndex: "owner",
    key: "avatar",
    width: 48,
    render: (owner: Repository["owner"]) => <Avatar src={owner.avatar_url} />,
  },
  {
    title: "Username",
    key: "username",
    width: 150,
    dataIndex: "owner",
    render: (owner: Repository["owner"]) => <Text small>{owner.login}</Text>,
  },
  {
    title: "Repository",
    key: "repository",
    dataIndex: "name",
    render: (name: Repository["name"]) => <Text small>{name}</Text>,
  },

  {
    title: "Language",
    key: "language",
    dataIndex: "language",
    render: (language: Repository["language"]) => <Text small>{language}</Text>,
  },
  {
    title: "Stars",
    key: "stars",
    dataIndex: "stargazers_count",
    render: (stars: Repository["stargazers_count"]) => (
      <Row className="gap-1 items-center">
        <Icon size="small" name="star" color="lightText" />
        <Text small color="lightText">
          {stars}
        </Text>
      </Row>
    ),
  },
  {
    title: "Dates",
    key: "dates",
    render: ({ created_at, updated_at }: Repository) => (
      <Column>
        <Text small>Created: {formatDayMonth(created_at)}</Text>
        <Text small>Updated: {formatDayMonth(updated_at)}</Text>
      </Column>
    ),
  },
  {
    key: "href",
    dataIndex: "html_url",
    render: (html_url: Repository["html_url"]) => (
      <Link href={html_url} target="_blank" className="text-lightText hover:opacity-70">
        <Icon name="externalLink" />
      </Link>
    ),
  },
];
