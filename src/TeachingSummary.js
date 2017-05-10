import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
  Grid,
  Glyphicon,
  Panel,
  Label,
} from 'react-bootstrap';

const summaryGoodPointsHeader = <h3><Glyphicon glyph="thumbs-up" /> What was good about Peter?</h3>;
const summaryBadPointsHeader = <h3><Glyphicon glyph="thumbs-down" /> How might Peter be improved? </h3>;

class TeachingSummary extends React.Component {
  render() {
    const summary = this.props.summary;
    let goodPoints = null;
    let badPoints = null;
    let pastCodes = null;
    if (summary.goodPoints !== undefined) {
      goodPoints = summary.goodPoints.map((m, i) => <li key={i}>{m}</li>);
    }
    if (summary.badPoints !== undefined) {
      badPoints = summary.badPoints.map((m, i) => <li key={i}>{m}</li>);
    }
    if (summary.pastCodes !== undefined) {
      pastCodes = summary.pastCodes.map((m, i) => <Label key={i} bsStyle="warning">{m}</Label>);
    }
    return (
      <div>
        <h4>{summary.code} - {summary.title}</h4>
        { summary.description !== undefined && <Panel>{summary.description}</Panel> }
        { summary.pastCodes !== undefined && <p>Previous code: {pastCodes}</p>}
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Panel bsStyle="success" header={summaryGoodPointsHeader}>
                { summary.goodPoints !== undefined && <ol>{goodPoints}</ol> }
              </Panel>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Panel bsStyle="danger" header={summaryBadPointsHeader}>
                { summary.badPoints !== undefined && <ol>{badPoints}</ol> }
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

TeachingSummary.propTypes = {
  summary: PropTypes.shape({
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    goodPoints: PropTypes.arrayOf(PropTypes.string),
    badPoints: PropTypes.arrayOf(PropTypes.string),
    pastCodes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

// code: 'COMP1001',
// title: 'Exploring Multimedia and Internet Computing',
// description: descriptionCOMP1001,
// goodPoints: [],
// badPoints: ['xxx', 'yyy'],

export default TeachingSummary;
