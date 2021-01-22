import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
// @ts-ignore
import ReactTags from 'react-tag-autocomplete';
import { FieldMetaProps, FieldProps } from 'formik';
import { InputProps, TextAreaProps } from 'antd/lib/input';
import { FormikInputProps } from './UploadButtonComponent';
import { media } from '../../global/RWD';

interface EditorStylesWrapperType {
  form?: any;
}

const ReactTagsWrapper = styled.div<EditorStylesWrapperType>`
  .react-tags {
    margin-top: 16px;
    width: 400px;
    ${media.xs`
      width:100%;
`}
    ${media.md`
      width: 400px;
`}
    position: relative;
    padding: 6px 0 0 6px;
    border: 1px solid
      ${props =>
        props.form.errors.tagForm ? props.theme.colors.functional.error : props.theme.colors.utils.border.light};
    border-radius: 2px;
    font-size: 1em;
    line-height: 1.2;
    cursor: text;
  }

  .react-tags.is-focused {
    border: 3px solid ${props => props.theme.colors.utils.background.mid.color};
  }

  .react-tags__selected {
    display: inline;
  }

  .react-tags__selected-tag {
    display: inline-block;
    box-sizing: border-box;
    margin: 0 6px 6px 0;
    padding: 6px 8px;
    border: 1px solid ${props => props.theme.colors.main.tetiary};
    border-radius: 2px;
    background: ${props => props.theme.colors.main.tetiary};
    font-size: inherit;
    line-height: inherit;
    color: ${props => props.theme.colors.utils.background.mid.primary};
  }

  .react-tags__selected-tag:after {
    content: '\\2715';
    color: ${props => props.theme.colors.utils.background.mid.primary};
    margin-left: 8px;
  }

  .react-tags__selected-tag:hover,
  .react-tags__selected-tag:focus {
    border-color: #b1b1b1;
  }

  .react-tags__search {
    display: inline-block;
    padding: 7px 2px;
    margin-bottom: 6px;
  }

  @media screen and (min-width: 30em) {
    .react-tags__search {
      position: relative;
    }
  }

  .react-tags__search-input {
    margin: 0;
    width: 100% !important ;
    border: 0;
    outline: none;
    height: 28px;
    font-size: inherit;
    color: ${props => props.theme.colors.utils.background.light};
    line-height: inherit;
    background-color: ${props => props.theme.colors.main.primary};
    ::placeholder {
      color: ${props => props.theme.colors.utils.background.light};
    }
  }

  .react-tags__search-input::-ms-clear {
    display: none;
    margin-left: 20px;
  }

  .react-tags__suggestions {
    position: absolute;
    z-index: 999;
    top: 100%;
    left: 0;
    width: 100%;
  }

  @media screen and (min-width: 30em) {
    .react-tags__suggestions {
      width: 240px;
    }
  }

  .react-tags__suggestions ul {
    margin: 4px -1px;
    padding: 0;
    list-style: none;
    background: white;
    border: 1px solid #d1d1d1;
    border-radius: 2px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .react-tags__suggestions li {
    border-bottom: 1px solid #ddd;
    padding: 6px 8px;
  }

  .react-tags__suggestions li mark {
    text-decoration: underline;
    background: none;
    font-weight: 600;
  }

  .react-tags__suggestions li:hover {
    cursor: pointer;
    background: #eee;
  }

  .react-tags__suggestions li.is-active {
    background: #b7cfe0;
  }

  .react-tags__suggestions li.is-disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

const RequiredError = styled.div`
  ${props => props.theme.typography.subtitle1};
  color: ${props => props.theme.colors.functional.error};
`;

const QuestionsStyle = styled.div`
  margin-top: 40px;
  ${props => props.theme.typography.h6};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

type CustomInputComponentProps = FormikInputProps &
  FieldProps &
  InputProps &
  TextAreaProps &
  FieldMetaProps<any> &
  EditorStylesWrapperType;

export const TagForm = (props: CustomInputComponentProps): ReactElement<CustomInputComponentProps> => {
  const [tagsForm, setTagsForm] = useState([]);
  const { field, form } = props;

  const [suggestionTag, setSuggestionTag] = useState([
    {
      id: 0,
      name: 'JavaScript',
    },
    {
      id: 1,
      name: 'React',
    },
    {
      id: 2,
      name: 'Java',
    },
    {
      id: 3,
      name: 'Angular',
    },
    {
      id: 4,
      name: 'Python',
    },
    {
      id: 5,
      name: 'PHP',
    },
    {
      id: 6,
      name: 'Node.js',
    },
    {
      id: 7,
      name: '.Net',
    },
    {
      id: 8,
      name: 'Docker',
    },
    {
      id: 9,
      name: 'AWS',
    },
    {
      id: 10,
      name: 'HTML5',
    },
    {
      id: 11,
      name: 'Android',
    },
    {
      id: 12,
      name: 'C#',
    },
    {
      id: 13,
      name: 'iOS',
    },
    {
      id: 14,
      name: 'CSS3',
    },
    {
      id: 15,
      name: 'TypeScript',
    },
    {
      id: 16,
      name: 'C++',
    },
    {
      id: 17,
      name: 'Git',
    },
    {
      id: 18,
      name: 'Jira',
    },
    {
      id: 19,
      name: 'MySQL',
    },
    {
      id: 20,
      name: 'DevOps',
    },
    {
      id: 21,
      name: 'Big Data',
    },
    {
      id: 22,
      name: 'Linux',
    },
    {
      id: 23,
      name: 'React Native',
    },
    {
      id: 24,
      name: 'Kotlin',
    },
    {
      id: 25,
      name: 'Kubernetes',
    },
    {
      id: 26,
      name: 'Ruby',
    },
    {
      id: 27,
      name: 'Symfony',
    },
    {
      id: 28,
      name: 'Swift',
    },
    {
      id: 29,
      name: 'Vue.js',
    },
    {
      id: 30,
      name: 'Microsoft Azure',
    },
    {
      id: 31,
      name: 'Spring',
    },
    {
      id: 32,
      name: 'Microsoft SQL',
    },
    {
      id: 33,
      name: 'PostgreSQL',
    },
    {
      id: 34,
      name: 'MongoDB',
    },
    {
      id: 35,
      name: 'Jenkins',
    },
    {
      id: 36,
      name: 'QA',
    },
    {
      id: 37,
      name: 'ElasticSearch',
    },
    {
      id: 38,
      name: 'testing',
    },
    {
      id: 39,
      name: 'Hibernate',
    },
    {
      id: 40,
      name: 'Java EE',
    },
    {
      id: 41,
      name: 'Scrum',
    },
    {
      id: 42,
      name: 'Blockchain',
    },
    {
      id: 43,
      name: 'Google Cloud Platform',
    },
    {
      id: 44,
      name: 'Rails',
    },
    {
      id: 45,
      name: 'Slack',
    },
    {
      id: 46,
      name: 'Scala',
    },
    {
      id: 47,
      name: 'sql',
    },
    {
      id: 48,
      name: 'Selenium',
    },
    {
      id: 49,
      name: 'Redux',
    },
    {
      id: 50,
      name: 'Magento',
    },
    {
      id: 51,
      name: 'Golang',
    },
    {
      id: 52,
      name: 'Terraform',
    },
    {
      id: 53,
      name: 'Laravel',
    },
    {
      id: 54,
      name: 'Flutter',
    },
    {
      id: 55,
      name: 'Ansible',
    },
    {
      id: 56,
      name: 'Wordpress',
    },
    {
      id: 57,
      name: 'jQuery',
    },
    {
      id: 58,
      name: 'Oracle DB',
    },
    {
      id: 59,
      name: 'Mobile',
    },
    {
      id: 60,
      name: 'Github',
    },
    {
      id: 61,
      name: 'Kafka',
    },
    {
      id: 62,
      name: '.NET Core',
    },
    {
      id: 63,
      name: 'Django',
    },
    {
      id: 64,
      name: 'JS',
    },
    {
      id: 65,
      name: 'Redis',
    },
    {
      id: 66,
      name: 'Objective C',
    },
    {
      id: 67,
      name: 'Amazon Web Service',
    },
    {
      id: 68,
      name: 'Azure',
    },
    {
      id: 69,
      name: 'RabbitMQ',
    },
    {
      id: 70,
      name: 'PWA',
    },
    {
      id: 71,
      name: 'Spring Boot',
    },
    {
      id: 72,
      name: 'React.js',
    },
    {
      id: 73,
      name: 'Nginx',
    },
    {
      id: 74,
      name: 'Machine Learning',
    },
    {
      id: 75,
      name: 'xamarin',
    },
    {
      id: 76,
      name: 'Bootstrap',
    },
    {
      id: 77,
      name: 'Windows',
    },
    {
      id: 78,
      name: 'SAP',
    },
    {
      id: 79,
      name: 'Cassandra',
    },
    {
      id: 80,
      name: 'BI',
    },
    {
      id: 81,
      name: 'Flask',
    },
    {
      id: 82,
      name: 'Elixir',
    },
    {
      id: 83,
      name: 'GraphQL',
    },
    {
      id: 84,
      name: 'Sass',
    },
    {
      id: 85,
      name: 'Circle CI',
    },
    {
      id: 86,
      name: 'GitLab',
    },
    {
      id: 87,
      name: 'Apache Spark',
    },
    {
      id: 88,
      name: 'Power BI',
    },
    {
      id: 89,
      name: 'Rust',
    },
    {
      id: 90,
      name: 'CI/CD',
    },
    {
      id: 91,
      name: 'Vue',
    },
    {
      id: 92,
      name: 'Unity',
    },
    {
      id: 93,
      name: 'Bash',
    },
    {
      id: 94,
      name: 'hadoop',
    },
    {
      id: 95,
      name: 'Zend Framework',
    },
    {
      id: 96,
      name: 'ionic',
    },
    {
      id: 97,
      name: 'Erlang',
    },
    {
      id: 98,
      name: 'Tensorflow',
    },
    {
      id: 99,
      name: 'IoT',
    },
    {
      id: 100,
      name: 'Ember',
    },
    {
      id: 101,
      name: 'html',
    },
    {
      id: 102,
      name: 'ai',
    },
    {
      id: 103,
      name: 'Clojure',
    },
    {
      id: 104,
      name: 'Agile',
    },
    {
      id: 105,
      name: 'HAProxy',
    },
    {
      id: 106,
      name: 'Qlik',
    },
    {
      id: 107,
      name: 'IT Recruitment',
    },
    {
      id: 108,
      name: 'abap',
    },
    {
      id: 109,
      name: 'JSP',
    },
    {
      id: 110,
      name: 'ETL',
    },
    {
      id: 111,
      name: 'Bamboo',
    },
    {
      id: 112,
      name: 'Puppet',
    },
    {
      id: 113,
      name: 'Go',
    },
    {
      id: 114,
      name: 'Groovy',
    },
    {
      id: 115,
      name: 'Embedded C',
    },
    {
      id: 116,
      name: 'REST',
    },
    {
      id: 117,
      name: 'Solr',
    },
    {
      id: 118,
      name: 'salesforce',
    },
    {
      id: 119,
      name: 'C+',
    },
    {
      id: 120,
      name: 'Photoshop',
    },
    {
      id: 121,
      name: 'Akka',
    },
    {
      id: 122,
      name: 'R',
    },
    {
      id: 123,
      name: 'Twig',
    },
    {
      id: 124,
      name: 'Perl',
    },
    {
      id: 125,
      name: 'Dart',
    },
    {
      id: 126,
      name: 'Microsoft BI Stack',
    },
    {
      id: 127,
      name: 'GNU R',
    },
    {
      id: 128,
      name: 'Hotjar',
    },
    {
      id: 129,
      name: 'Babel',
    },
    {
      id: 130,
      name: 'Tibco',
    },
    {
      id: 131,
      name: 'Swagger',
    },
    {
      id: 132,
      name: 'KnockOutJS',
    },
    {
      id: 133,
      name: 'ECMAScript',
    },
    {
      id: 134,
      name: 'C',
    },
    {
      id: 135,
      name: 'Grunt',
    },
    {
      id: 136,
      name: 'Sinon.js',
    },
    {
      id: 137,
      name: 'SD-WAN',
    },
    {
      id: 138,
      name: 'ZeroMQ',
    },
    {
      id: 139,
      name: 'Couchbase',
    },
    {
      id: 140,
      name: 'Packer',
    },
    {
      id: 141,
      name: 'Cloudformation',
    },
    {
      id: 142,
      name: 'Logstash',
    },
    {
      id: 143,
      name: 'Hive',
    },
    {
      id: 144,
      name: 'Sinatra',
    },
    {
      id: 145,
      name: 'PyTest',
    },
    {
      id: 146,
      name: 'Consul',
    },
    {
      id: 147,
      name: 'iVPN',
    },
    {
      id: 148,
      name: 'JEE',
    },
    {
      id: 149,
      name: 'Foundation',
    },
    {
      id: 150,
      name: 'Chai',
    },
    {
      id: 151,
      name: 'Chef',
    },
    {
      id: 152,
      name: 'Mocha',
    },
    {
      id: 153,
      name: 'Bower',
    },
    {
      id: 154,
      name: 'Mesos',
    },
    {
      id: 155,
      name: 'BGP Optimization',
    },
    {
      id: 156,
      name: 'MapR',
    },
    {
      id: 157,
      name: 'Gradle',
    },
    {
      id: 158,
      name: 'Visual Basic',
    },
    {
      id: 159,
      name: 'Memcached',
    },
    {
      id: 160,
      name: 'DynamoDB',
    },
    {
      id: 161,
      name: 'F#',
    },
    {
      id: 162,
      name: 'Pimcore',
    },
    {
      id: 163,
      name: 'Zabbix',
    },
    {
      id: 164,
      name: 'Aurelia',
    },
    {
      id: 165,
      name: 'Vagrant',
    },
    {
      id: 166,
      name: 'Kibana',
    },
    {
      id: 167,
      name: 'Trello',
    },
    {
      id: 168,
      name: 'ArangoDB',
    },
    {
      id: 169,
      name: 'Data Security',
    },
    {
      id: 170,
      name: 'Cypress.io',
    },
    {
      id: 171,
      name: 'Flux',
    },
    {
      id: 172,
      name: 'CodeIgniter',
    },
    {
      id: 173,
      name: 'RWD',
    },
    {
      id: 174,
      name: 'Gulp',
    },
    {
      id: 175,
      name: 'Less',
    },
    {
      id: 176,
      name: 'Haskell',
    },
    {
      id: 177,
      name: 'Backbone',
    },
    {
      id: 178,
      name: 'Hbase',
    },
    {
      id: 179,
      name: 'Axon Framework',
    },
    {
      id: 180,
      name: 'Cloud Access',
    },
    {
      id: 181,
      name: 'Hystrix',
    },
    {
      id: 182,
      name: 'Maven',
    },
    {
      id: 183,
      name: 'Network Security',
    },
    {
      id: 184,
      name: 'Fuse',
    },
    {
      id: 185,
      name: 'Python',
    },
    {
      id: 186,
      name: 'HTML',
    },
    {
      id: 187,
      name: 'Ruby',
    },
    {
      id: 188,
      name: 'Net',
    },
    {
      id: 189,
      name: 'UX/UI',
    },
    {
      id: 190,
      name: 'PM',
    },
    {
      id: 191,
      name: 'Game',
    },
    {
      id: 191,
      name: 'Security',
    },
    {
      id: 191,
      name: 'Data',
    },
    {
      id: 191,
      name: 'Analytics',
    },
    {
      id: 191,
      name: 'Support',
    },
  ]);

  const onDelete = (index: number) => {
    const tags = tagsForm.slice(0);
    tags.splice(index, 1);
    const removedTag = tagsForm[index];
    const suggestions = [].concat(suggestionTag as [], removedTag);
    setSuggestionTag(suggestions);
    setTagsForm(tags);
  };

  const handleAddition = (tag: any) => {
    const tags = [].concat(tagsForm, tag);
    const suggestions = suggestionTag.filter(x => x.id !== tag.id);
    setSuggestionTag(suggestions);
    setTagsForm(tags);
    form.setFieldValue(field.name, tagsForm);
  };

  return (
    <>
      <div style={{ marginTop: '20px' }}>
        <QuestionsStyle>
          <text>Choose skills what you have.</text>
        </QuestionsStyle>
      </div>
      <ReactTagsWrapper form={props.form}>
        <ReactTags
          tags={tagsForm}
          noSuggestionsText={'No suggestions found'}
          suggestions={suggestionTag}
          onDelete={onDelete}
          onAddition={handleAddition}
        />
      </ReactTagsWrapper>
      {form.errors.tagForm && form.touched.tagForm ? <RequiredError>Required</RequiredError> : null}
    </>
  );
};
