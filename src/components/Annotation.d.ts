import React from '../../node_modules/react';
import AnnotationProps from './AnnotationProps';
declare function Annotation({ latitude, longitude, title, subtitle, accessibilityLabel, size, paddingTop, paddingRight, paddingBottom, paddingLeft, anchorOffsetX, anchorOffsetY, selected, onSelect, onDeselect, onDragStart, onDragEnd, onDragging, animates, appearanceAnimation, visible, clusteringIdentifier, displayPriority, collisionMode, calloutElement, calloutContent, calloutLeftAccessory, calloutRightAccessory, calloutEnabled, calloutOffsetX, calloutOffsetY, draggable, enabled, children, }: AnnotationProps): React.JSX.Element;
declare namespace Annotation {
    var __docgenInfo: {
        description: string;
        methods: never[];
        displayName: string;
        props: {
            latitude: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
            };
            longitude: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
            };
            title: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            subtitle: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            accessibilityLabel: {
                required: boolean;
                tsType: {
                    name: string;
                    raw: string;
                    elements: {
                        name: string;
                    }[];
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            size: {
                required: boolean;
                tsType: {
                    name: string;
                    type: string;
                    raw: string;
                    signature: {
                        properties: {
                            key: string;
                            value: {
                                name: string;
                                required: boolean;
                            };
                        }[];
                    };
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            paddingTop: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            paddingRight: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            paddingBottom: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            paddingLeft: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            anchorOffsetX: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            anchorOffsetY: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            selected: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            onSelect: {
                required: boolean;
                tsType: {
                    name: string;
                    type: string;
                    raw: string;
                    signature: {
                        arguments: never[];
                        return: {
                            name: string;
                        };
                    };
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            onDeselect: {
                required: boolean;
                tsType: {
                    name: string;
                    type: string;
                    raw: string;
                    signature: {
                        arguments: never[];
                        return: {
                            name: string;
                        };
                    };
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            onDragStart: {
                required: boolean;
                tsType: {
                    name: string;
                    type: string;
                    raw: string;
                    signature: {
                        arguments: never[];
                        return: {
                            name: string;
                        };
                    };
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            onDragEnd: {
                required: boolean;
                tsType: {
                    name: string;
                    type: string;
                    raw: string;
                    signature: {
                        arguments: {
                            type: {
                                name: string;
                            };
                            name: string;
                        }[];
                        return: {
                            name: string;
                        };
                    };
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            onDragging: {
                required: boolean;
                tsType: {
                    name: string;
                    type: string;
                    raw: string;
                    signature: {
                        arguments: {
                            type: {
                                name: string;
                            };
                            name: string;
                        }[];
                        return: {
                            name: string;
                        };
                    };
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            animates: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            appearanceAnimation: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            draggable: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            enabled: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            visible: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            children: {
                required: boolean;
                tsType: {
                    name: string;
                    raw: string;
                };
                description: string;
            };
            clusteringIdentifier: {
                required: boolean;
                tsType: {
                    name: string;
                    raw: string;
                    elements: {
                        name: string;
                    }[];
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            collisionMode: {
                required: boolean;
                tsType: {
                    name: string;
                    raw: string;
                    elements: ({
                        name: string;
                        value: string;
                    } | {
                        name: string;
                        value?: undefined;
                    })[];
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            displayPriority: {
                required: boolean;
                tsType: {
                    name: string;
                    raw: string;
                    elements: ({
                        name: string;
                        value?: undefined;
                    } | {
                        name: string;
                        value: string;
                    })[];
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            calloutOffsetX: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            calloutOffsetY: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            calloutEnabled: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            calloutLeftAccessory: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            calloutRightAccessory: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            calloutContent: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
            calloutElement: {
                required: boolean;
                tsType: {
                    name: string;
                };
                description: string;
                defaultValue: {
                    value: string;
                    computed: boolean;
                };
            };
        };
    };
}
export default Annotation;
