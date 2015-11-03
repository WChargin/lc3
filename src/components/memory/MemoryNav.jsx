import React, {Component} from 'react';
import {Button, ButtonGroup, ButtonToolbar, OverlayTrigger, Popover, Glyphicon} from 'react-bootstrap';
import MemorySearch from './MemorySearch';

export default class MemoryNav extends Component {

    render() {
        const disabled = this.props.batch;
        const scrollDelta = 1;
        const groupStyle = { float: "none" };
        return <ButtonToolbar className="center-block">
            <ButtonGroup style={groupStyle}>
                <Button
                    onClick={() => this.props.onScrollBy(-scrollDelta)}
                    disabled={disabled}
                >
                    <Glyphicon glyph="chevron-up" alt="Scroll memory up" />
                </Button>
                <Button
                    onClick={() => this.props.onScrollBy(scrollDelta)}
                    disabled={disabled}
                >
                    <Glyphicon glyph="chevron-down" alt="Scroll memory down" />
                </Button>
                <Button
                    onClick={this.props.onScrollToPC}
                    disabled={disabled}
                >
                    Jump to PC
                </Button>
                <OverlayTrigger
                    placement="right"
                    trigger="click"
                    rootClose
                    overlay={
                        <Popover id="memory-search">
                            <MemorySearch
                                symbolTable={this.props.symbolTable}
                                onScrollTo={this.props.onScrollTo}
                                ref="search"
                            />
                        </Popover>
                    }
                    onEntering={() => this.refs.search.focus()}
                >
                    <Button disabled={disabled}>Jump to&hellip;</Button>
                </OverlayTrigger>
            </ButtonGroup>
        </ButtonToolbar>;
    }

}
