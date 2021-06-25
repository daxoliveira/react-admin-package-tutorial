import * as React from "react";
import { PostFilter } from './PostFilter';
import { useMediaQuery } from '@material-ui/core';
import { List, SimpleList, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

export const PostList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List filters={<PostFilter />} {...props}>
      {
        isSmall ? (
          <SimpleList 
            primaryText={record => record.title}
          />
        )
        :
        (
          <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
              <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
          </Datagrid>
        )
      }
    </List>
  );
}
