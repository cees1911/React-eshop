import React from 'react';
import { connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component'

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) =>( 
  <DirectoryMenuContainer>
    {sections.map(( { id, ...otherSectionsProps} ) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}            
  </DirectoryMenuContainer>
    );

const mapStatToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect( mapStatToProps) (Directory);