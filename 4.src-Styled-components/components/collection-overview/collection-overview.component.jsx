import React from 'react'
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectcollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionOverview = ({collections}) => {
  return (
    <div className="collections-overview">
       {
        collections.map(({id, ...otherCollectionProps}) =>(
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
      }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  collections: selectcollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
