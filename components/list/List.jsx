import { Card, CardContent, CardHeader } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { ActionBar } from '../actions';

function List(props) {
  const { title, actions, children } = props;

  return (
    <Card>
      <CardHeader
        title={title}
        action={
          <ActionBar actions={actions} />
        }
      />

      <CardContent>
        {React.Children.map(children, (child) => (
          <div style={{ margin: 12 }}>
            {child}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  actions: ActionBar.propTypes.actions,
  children: PropTypes.node.isRequired,
};

List.defaultProps = {
  actions: [],
};

export default List;
