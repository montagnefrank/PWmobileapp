(window.webpackJsonp = window.webpackJsonp || []).push([
    [17], {
        "/TVo": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("CcnG"),
                o = (n("urB8"), n("0M9P"));
            n("xZld"), t.NodeDraggableDirective = function() {
                function e(e, t, n) {
                    this.element = e, this.nodeDraggableService = t, this.renderer = n, this.disposersForDragListeners = [], this.nodeNativeElement = e.nativeElement
                }
                return e.prototype.ngOnInit = function() {
                    this.tree.isStatic() || (this.renderer.setAttribute(this.nodeNativeElement, "draggable", "true"), this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, "dragenter", this.handleDragEnter.bind(this))), this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, "dragover", this.handleDragOver.bind(this))), this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, "dragstart", this.handleDragStart.bind(this))), this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, "dragleave", this.handleDragLeave.bind(this))), this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, "drop", this.handleDrop.bind(this))), this.disposersForDragListeners.push(this.renderer.listen(this.nodeNativeElement, "dragend", this.handleDragEnd.bind(this))))
                }, e.prototype.ngOnDestroy = function() {
                    this.disposersForDragListeners.forEach(function(e) {
                        return e()
                    })
                }, e.prototype.handleDragStart = function(t) {
                    t.stopPropagation && t.stopPropagation(), this.nodeDraggableService.captureNode(new o.CapturedNode(this.nodeDraggable, this.tree)), t.dataTransfer.setData("text", e.DATA_TRANSFER_STUB_DATA), t.dataTransfer.effectAllowed = "move"
                }, e.prototype.handleDragOver = function(e) {
                    e.preventDefault(), e.dataTransfer.dropEffect = "move"
                }, e.prototype.handleDragEnter = function(e) {
                    e.preventDefault(), this.containsElementAt(e) && this.addClass("over-drop-target")
                }, e.prototype.handleDragLeave = function(e) {
                    this.containsElementAt(e) || this.removeClass("over-drop-target")
                }, e.prototype.handleDrop = function(e) {
                    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), this.removeClass("over-drop-target"), !!this.isDropPossible(e) && (this.nodeDraggableService.getCapturedNode() ? this.notifyThatNodeWasDropped() : void 0)
                }, e.prototype.isDropPossible = function(e) {
                    var t = this.nodeDraggableService.getCapturedNode();
                    return t && t.canBeDroppedAt(this.nodeDraggable) && this.containsElementAt(e)
                }, e.prototype.handleDragEnd = function(e) {
                    this.removeClass("over-drop-target"), this.nodeDraggableService.releaseCapturedNode()
                }, e.prototype.containsElementAt = function(e) {
                    var t = e.x,
                        n = e.y;
                    return this.nodeNativeElement.contains(document.elementFromPoint(void 0 === t ? e.clientX : t, void 0 === n ? e.clientY : n))
                }, e.prototype.addClass = function(e) {
                    this.nodeNativeElement.classList.add(e)
                }, e.prototype.removeClass = function(e) {
                    this.nodeNativeElement.classList.remove(e)
                }, e.prototype.notifyThatNodeWasDropped = function() {
                    this.nodeDraggableService.fireNodeDragged(this.nodeDraggableService.getCapturedNode(), this.nodeDraggable)
                }, e.DATA_TRANSFER_STUB_DATA = "some browsers enable drag-n-drop only when dataTransfer has data", e.decorators = [{
                    type: i.Directive,
                    args: [{
                        selector: "[nodeDraggable]"
                    }]
                }], e.propDecorators = {
                    nodeDraggable: [{
                        type: i.Input
                    }],
                    tree: [{
                        type: i.Input
                    }]
                }, e
            }()
        },
        "0M9P": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CapturedNode = function() {
                function e(e, t) {
                    this.anElement = e, this.aTree = t
                }
                return e.prototype.canBeDroppedAt = function(e) {
                    return !this.sameAs(e) && !this.contains(e)
                }, e.prototype.contains = function(e) {
                    return this.element.nativeElement.contains(e.nativeElement)
                }, e.prototype.sameAs = function(e) {
                    return this.element === e
                }, Object.defineProperty(e.prototype, "element", {
                    get: function() {
                        return this.anElement
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "tree", {
                    get: function() {
                        return this.aTree
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }()
        },
        "1PfE": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeEditableEventAction = function(e) {
                return e[e.Cancel = 0] = "Cancel", e
            }(t.NodeEditableEventAction || {})
        },
        "4fRq": function(e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var i = new Uint8Array(16);
                e.exports = function() {
                    return n(i), i
                }
            } else {
                var o = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
                    return o
                }
            }
        },
        "58b6": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("kQXf");
            t.FoldingType = function() {
                function e(e) {
                    this._cssClass = e
                }
                return Object.defineProperty(e.prototype, "cssClass", {
                    get: function() {
                        return this._cssClass
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.Expanded = new e("node-expanded"), e.Collapsed = new e("node-collapsed"), e.Empty = new e("node-empty"), e.Leaf = new e("node-leaf"), e
            }(), t.TreeModelSettings = function() {
                function e() {}
                return e.merge = function(t, n) {
                    var o = i.omit(i.get(n, "settings"), e.NOT_CASCADING_SETTINGS);
                    return i.defaultsDeep({}, i.get(t, "settings"), o, {
                        static: !1,
                        leftMenu: !1,
                        rightMenu: !0,
                        isCollapsedOnInit: !1,
                        checked: !1,
                        keepNodesInDOM: !1,
                        selectionAllowed: !0
                    })
                }, e.NOT_CASCADING_SETTINGS = ["selectionAllowed"], e
            }(), t.Ng2TreeSettings = function() {
                this.rootIsVisible = !0, this.showCheckboxes = !1, this.enableCheckboxes = !0
            }, t.TreeStatus = function(e) {
                return e[e.New = 0] = "New", e[e.Modified = 1] = "Modified", e[e.IsBeingRenamed = 2] = "IsBeingRenamed", e
            }(t.TreeStatus || {})
        },
        "88/t": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("DtyJ");
            n.d(t, "Observable", function() {
                return i.Observable
            })
        },
        FBEI: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n("O5R2"), n("lZOh"), n("tKjC"), t.noop = function() {}
        },
        FYBg: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("CcnG"),
                o = (n("JZ5S"), n("QG5k")),
                r = n("TCh0");
            t.NodeMenuComponent = function() {
                function e(e, t) {
                    this.renderer = e, this.nodeMenuService = t, this.menuItemSelected = new i.EventEmitter, this.availableMenuItems = [{
                        name: "New tag",
                        action: o.NodeMenuItemAction.NewTag,
                        cssClass: "new-tag"
                    }, {
                        name: "New folder",
                        action: o.NodeMenuItemAction.NewFolder,
                        cssClass: "new-folder"
                    }, {
                        name: "Rename",
                        action: o.NodeMenuItemAction.Rename,
                        cssClass: "rename"
                    }, {
                        name: "Remove",
                        action: o.NodeMenuItemAction.Remove,
                        cssClass: "remove"
                    }], this.disposersForGlobalListeners = []
                }
                return e.prototype.ngOnInit = function() {
                    this.availableMenuItems = this.menuItems || this.availableMenuItems, this.disposersForGlobalListeners.push(this.renderer.listen("document", "keyup", this.closeMenu.bind(this))), this.disposersForGlobalListeners.push(this.renderer.listen("document", "mousedown", this.closeMenu.bind(this)))
                }, e.prototype.ngOnDestroy = function() {
                    this.disposersForGlobalListeners.forEach(function(e) {
                        return e()
                    })
                }, e.prototype.onMenuItemSelected = function(e, t) {
                    r.isLeftButtonClicked(e) && (this.menuItemSelected.emit({
                        nodeMenuItemAction: t.action,
                        nodeMenuItemSelected: t.name
                    }), this.nodeMenuService.fireMenuEvent(e.target, o.NodeMenuAction.Close))
                }, e.prototype.closeMenu = function(e) {
                    var t = e instanceof MouseEvent,
                        n = this.menuContainer.nativeElement !== e.target && this.menuContainer.nativeElement.contains(e.target);
                    (t && !n || r.isEscapePressed(e)) && this.nodeMenuService.fireMenuEvent(e.target, o.NodeMenuAction.Close)
                }, e.decorators = [{
                    type: i.Component,
                    args: [{
                        selector: "node-menu",
                        template: '\n    <div class="node-menu">\n      <ul class="node-menu-content" #menuContainer>\n        <li class="node-menu-item" *ngFor="let menuItem of availableMenuItems"\n          (click)="onMenuItemSelected($event, menuItem)">\n          <div class="node-menu-item-icon {{menuItem.cssClass}}"></div>\n          <span class="node-menu-item-value">{{menuItem.name}}</span>\n        </li>\n      </ul>\n    </div>\n  '
                    }]
                }], e.propDecorators = {
                    menuItemSelected: [{
                        type: i.Output
                    }],
                    menuItems: [{
                        type: i.Input
                    }],
                    menuContainer: [{
                        type: i.ViewChild,
                        args: ["menuContainer"]
                    }]
                }, e
            }()
        },
        "HHO+": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("CcnG"),
                o = (n("58b6"), n("58b6")),
                r = n("xZld"),
                l = n("lJMN"),
                s = (n("JZ5S"), n("QG5k")),
                d = n("1PfE"),
                u = (n("Tff5"), n("TCh0")),
                c = n("kQXf");
            t.TreeInternalComponent = function() {
                function e(e, t, n) {
                    this.nodeMenuService = e, this.treeService = t, this.nodeElementRef = n, this.isSelected = !1, this.isRightMenuVisible = !1, this.isLeftMenuVisible = !1, this.isReadOnly = !1, this.subscriptions = []
                }
                return e.prototype.ngAfterViewInit = function() {
                    this.tree.checked && !this.tree.firstCheckedFired && (this.tree.firstCheckedFired = !0, this.treeService.fireNodeChecked(this.tree))
                }, e.prototype.ngOnInit = function() {
                    var e = this,
                        t = c.get(this.tree, "node.id", "");
                    t && (this.controller = new l.TreeController(this), this.treeService.setController(t, this.controller)), this.settings = this.settings || new o.Ng2TreeSettings, this.isReadOnly = !c.get(this.settings, "enableCheckboxes", !0), this.tree.isRoot() && !1 === this.settings.rootIsVisible && this.tree.disableCollapseOnInit(), this.subscriptions.push(this.nodeMenuService.hideMenuStream(this.nodeElementRef).subscribe(function() {
                        e.isRightMenuVisible = !1, e.isLeftMenuVisible = !1
                    })), this.subscriptions.push(this.treeService.unselectStream(this.tree).subscribe(function() {
                        return e.isSelected = !1
                    })), this.subscriptions.push(this.treeService.draggedStream(this.tree, this.nodeElementRef).subscribe(function(t) {
                        e.tree.hasSibling(t.captured.tree) ? e.swapWithSibling(t.captured.tree, e.tree) : e.tree.isBranch() ? e.moveNodeToThisTreeAndRemoveFromPreviousOne(t, e.tree) : e.moveNodeToParentTreeAndRemoveFromPreviousOne(t, e.tree)
                    })), this.subscriptions.push(this.treeService.nodeChecked$.merge(this.treeService.nodeUnchecked$).filter(function(t) {
                        return e.eventContainsId(t) && e.tree.hasChild(t.node)
                    }).subscribe(function(t) {
                        return e.updateCheckboxState()
                    }))
                }, e.prototype.ngOnChanges = function(e) {
                    this.controller = new l.TreeController(this)
                }, e.prototype.ngOnDestroy = function() {
                    c.get(this.tree, "node.id", "") && this.treeService.deleteController(this.tree.node.id), this.subscriptions.forEach(function(e) {
                        return e && e.unsubscribe()
                    })
                }, e.prototype.swapWithSibling = function(e, t) {
                    t.swapWithSibling(e), this.treeService.fireNodeMoved(e, e.parent)
                }, e.prototype.moveNodeToThisTreeAndRemoveFromPreviousOne = function(e, t) {
                    this.treeService.fireNodeRemoved(e.captured.tree);
                    var n = t.addChild(e.captured.tree);
                    this.treeService.fireNodeMoved(n, e.captured.tree.parent)
                }, e.prototype.moveNodeToParentTreeAndRemoveFromPreviousOne = function(e, t) {
                    this.treeService.fireNodeRemoved(e.captured.tree);
                    var n = t.addSibling(e.captured.tree, t.positionInParent);
                    this.treeService.fireNodeMoved(n, e.captured.tree.parent)
                }, e.prototype.onNodeSelected = function(e) {
                    this.tree.selectionAllowed && u.isLeftButtonClicked(e) && (this.isSelected = !0, this.treeService.fireNodeSelected(this.tree))
                }, e.prototype.onNodeUnselected = function(e) {
                    this.tree.selectionAllowed && u.isLeftButtonClicked(e) && (this.isSelected = !1, this.treeService.fireNodeUnselected(this.tree))
                }, e.prototype.showRightMenu = function(e) {
                    this.tree.hasRightMenu() && (u.isRightButtonClicked(e) && (this.isRightMenuVisible = !this.isRightMenuVisible, this.nodeMenuService.hideMenuForAllNodesExcept(this.nodeElementRef)), e.preventDefault())
                }, e.prototype.showLeftMenu = function(e) {
                    this.tree.hasLeftMenu() && u.isLeftButtonClicked(e) && (this.isLeftMenuVisible = !this.isLeftMenuVisible, this.nodeMenuService.hideMenuForAllNodesExcept(this.nodeElementRef), this.isLeftMenuVisible && e.preventDefault())
                }, e.prototype.onMenuItemSelected = function(e) {
                    switch (e.nodeMenuItemAction) {
                        case s.NodeMenuItemAction.NewTag:
                        case s.NodeMenuItemAction.NewFolder:
                            this.onNewSelected(e);
                            break;
                        case s.NodeMenuItemAction.Rename:
                            this.onRenameSelected();
                            break;
                        case s.NodeMenuItemAction.Remove:
                            this.onRemoveSelected();
                            break;
                        case s.NodeMenuItemAction.Custom:
                            this.onCustomSelected(), this.treeService.fireMenuItemSelected(this.tree, e.nodeMenuItemSelected);
                            break;
                        default:
                            throw new Error("Chosen menu item doesn't exist")
                    }
                }, e.prototype.onNewSelected = function(e) {
                    this.tree.createNode(e.nodeMenuItemAction === s.NodeMenuItemAction.NewFolder), this.isRightMenuVisible = !1, this.isLeftMenuVisible = !1
                }, e.prototype.onRenameSelected = function() {
                    this.tree.markAsBeingRenamed(), this.isRightMenuVisible = !1, this.isLeftMenuVisible = !1
                }, e.prototype.onRemoveSelected = function() {
                    this.treeService.deleteController(c.get(this.tree, "node.id", "")), this.treeService.fireNodeRemoved(this.tree)
                }, e.prototype.onCustomSelected = function() {
                    this.isRightMenuVisible = !1, this.isLeftMenuVisible = !1
                }, e.prototype.onSwitchFoldingType = function() {
                    this.tree.switchFoldingType(), this.treeService.fireNodeSwitchFoldingType(this.tree)
                }, e.prototype.applyNewValue = function(e) {
                    if ((e.action === d.NodeEditableEventAction.Cancel || this.tree.isNew()) && r.Tree.isValueEmpty(e.value)) return this.treeService.fireNodeRemoved(this.tree);
                    if (this.tree.isNew() && (this.tree.value = e.value, this.treeService.fireNodeCreated(this.tree)), this.tree.isBeingRenamed()) {
                        var t = this.tree.value;
                        this.tree.value = e.value, this.treeService.fireNodeRenamed(t, this.tree)
                    }
                    this.tree.markAsModified()
                }, e.prototype.shouldShowInputForTreeValue = function() {
                    return this.tree.isNew() || this.tree.isBeingRenamed()
                }, e.prototype.isRootHidden = function() {
                    return this.tree.isRoot() && !this.settings.rootIsVisible
                }, e.prototype.hasCustomMenu = function() {
                    return this.tree.hasCustomMenu()
                }, e.prototype.switchNodeCheckStatus = function() {
                    this.tree.checked ? this.onNodeUnchecked() : this.onNodeChecked()
                }, e.prototype.onNodeChecked = function() {
                    this.checkboxElementRef && (this.checkboxElementRef.nativeElement.indeterminate = !1, this.treeService.fireNodeChecked(this.tree), this.executeOnChildController(function(e) {
                        return e.check()
                    }), this.tree.checked = !0)
                }, e.prototype.onNodeUnchecked = function() {
                    this.checkboxElementRef && (this.checkboxElementRef.nativeElement.indeterminate = !1, this.treeService.fireNodeUnchecked(this.tree), this.executeOnChildController(function(e) {
                        return e.uncheck()
                    }), this.tree.checked = !1)
                }, e.prototype.executeOnChildController = function(e) {
                    var t = this;
                    this.tree.hasLoadedChildern() && this.tree.children.forEach(function(n) {
                        var i = t.treeService.getController(n.id);
                        c.isNil(i) || e(i)
                    })
                }, e.prototype.updateCheckboxState = function() {
                    var e = this;
                    setTimeout(function() {
                        var t = e.tree.checkedChildrenAmount();
                        0 === t ? (e.checkboxElementRef.nativeElement.indeterminate = !1, e.tree.checked = !1, e.treeService.fireNodeUnchecked(e.tree)) : t === e.tree.loadedChildrenAmount() ? (e.checkboxElementRef.nativeElement.indeterminate = !1, e.tree.checked = !0, e.treeService.fireNodeChecked(e.tree)) : (e.tree.checked = !1, e.checkboxElementRef.nativeElement.indeterminate = !0, e.treeService.fireNodeIndetermined(e.tree))
                    })
                }, e.prototype.eventContainsId = function(e) {
                    return !!e.node.id || (console.warn('"Node with checkbox" feature requires a unique id assigned to every node, please consider to add it.'), !1)
                }, e.decorators = [{
                    type: i.Component,
                    args: [{
                        selector: "tree-internal",
                        template: '\n  <ul class="tree" *ngIf="tree" [ngClass]="{rootless: isRootHidden()}">\n    <li>\n      <div class="value-container"\n        [ngClass]="{rootless: isRootHidden()}"\n        [class.selected]="isSelected"\n        (contextmenu)="showRightMenu($event)"\n        [nodeDraggable]="nodeElementRef"\n        [tree]="tree">\n\n        <div class="folding" (click)="onSwitchFoldingType()" [ngClass]="tree.foldingCssClass"></div>\n\n        <div class="node-checkbox" *ngIf="settings.showCheckboxes">\n        <input checkbox  type="checkbox" [disabled]="isReadOnly" [checked]="this.tree.checked" (change)="switchNodeCheckStatus()" #checkbox />\n         </div>\n\n        <div class="node-value"\n          *ngIf="!shouldShowInputForTreeValue()"\n          [class.node-selected]="isSelected"\n          (click)="onNodeSelected($event)">\n            <div *ngIf="tree.nodeTemplate" class="node-template" [innerHTML]="tree.nodeTemplate | safeHtml"></div>\n            <span *ngIf="!template" class="node-name" [innerHTML]="tree.value | safeHtml"></span>\n            <span class="loading-children" *ngIf="tree.childrenAreBeingLoaded()"></span>\n            <ng-template [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{ $implicit: tree.node }"></ng-template>\n        </div>\n\n        <input type="text" class="node-value"\n           *ngIf="shouldShowInputForTreeValue()"\n           [nodeEditable]="tree.value"\n           (valueChanged)="applyNewValue($event)"/>\n\n        <div class="node-left-menu" *ngIf="tree.hasLeftMenu()" (click)="showLeftMenu($event)" [innerHTML]="tree.leftMenuTemplate">\n        </div>\n        <node-menu *ngIf="tree.hasLeftMenu() && isLeftMenuVisible && !hasCustomMenu()"\n          (menuItemSelected)="onMenuItemSelected($event)">\n        </node-menu>\n      </div>\n\n      <node-menu *ngIf="isRightMenuVisible && !hasCustomMenu()"\n           (menuItemSelected)="onMenuItemSelected($event)">\n      </node-menu>\n\n      <node-menu *ngIf="hasCustomMenu() && (isRightMenuVisible || isLeftMenuVisible)"\n           [menuItems]="tree.menuItems"\n           (menuItemSelected)="onMenuItemSelected($event)">\n      </node-menu>\n\n      <div *ngIf="tree.keepNodesInDOM()" [ngStyle]="{\'display\': tree.isNodeExpanded() ? \'block\' : \'none\'}">\n        <tree-internal *ngFor="let child of tree.childrenAsync | async" [tree]="child" [template]="template" [settings]="settings"></tree-internal>\n      </div>\n      <ng-template [ngIf]="tree.isNodeExpanded() && !tree.keepNodesInDOM()">\n        <tree-internal *ngFor="let child of tree.childrenAsync | async" [tree]="child" [template]="template" [settings]="settings"></tree-internal>\n      </ng-template>\n    </li>\n  </ul>\n  '
                    }]
                }], e.propDecorators = {
                    tree: [{
                        type: i.Input
                    }],
                    settings: [{
                        type: i.Input
                    }],
                    template: [{
                        type: i.Input
                    }],
                    checkboxElementRef: [{
                        type: i.ViewChild,
                        args: ["checkbox"]
                    }]
                }, e
            }()
        },
        I2ZF: function(e, t) {
            for (var n = [], i = 0; i < 256; ++i) n[i] = (i + 256).toString(16).substr(1);
            e.exports = function(e, t) {
                var i = t || 0;
                return n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]]
            }
        },
        JZ5S: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("CcnG"),
                o = n("buEt"),
                r = n("QG5k");
            t.NodeMenuService = function() {
                function e() {
                    this.nodeMenuEvents$ = new o.Subject
                }
                return e.prototype.fireMenuEvent = function(e, t) {
                    this.nodeMenuEvents$.next({
                        sender: e,
                        action: t
                    })
                }, e.prototype.hideMenuStream = function(e) {
                    return this.nodeMenuEvents$.filter(function(t) {
                        return e.nativeElement !== t.sender
                    }).filter(function(e) {
                        return e.action === r.NodeMenuAction.Close
                    })
                }, e.prototype.hideMenuForAllNodesExcept = function(e) {
                    this.nodeMenuEvents$.next({
                        sender: e.nativeElement,
                        action: r.NodeMenuAction.Close
                    })
                }, e.decorators = [{
                    type: i.Injectable
                }], e
            }()
        },
        O5R2: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("6blF"),
                o = n("VnD/");
            i.a.prototype.filter = function(e, t) {
                return Object(o.a)(e, t)(this)
            }
        },
        QG5k: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeMenuItemAction = function(e) {
                return e[e.NewFolder = 0] = "NewFolder", e[e.NewTag = 1] = "NewTag", e[e.Rename = 2] = "Rename", e[e.Remove = 3] = "Remove", e[e.Custom = 4] = "Custom", e
            }(t.NodeMenuItemAction || {}), t.NodeMenuAction = function(e) {
                return e[e.Close = 0] = "Close", e
            }(t.NodeMenuAction || {})
        },
        QGcS: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeDraggableEvent = function(e, t) {
                this.captured = e, this.target = t
            }
        },
        STEd: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n("FBEI");
            var i = n("CcnG"),
                o = n("xtUU"),
                r = n("HHO+"),
                l = n("Ip0R"),
                s = n("/TVo"),
                d = n("urB8"),
                u = n("ty8c"),
                c = n("FYBg"),
                a = n("JZ5S"),
                p = n("Tff5"),
                h = n("VUo1");
            t.TreeModule = function() {
                function e() {}
                return e.decorators = [{
                    type: i.NgModule,
                    args: [{
                        imports: [l.CommonModule],
                        declarations: [s.NodeDraggableDirective, o.TreeComponent, u.NodeEditableDirective, c.NodeMenuComponent, r.TreeInternalComponent, h.SafeHtmlPipe],
                        exports: [o.TreeComponent],
                        providers: [d.NodeDraggableService, a.NodeMenuService, p.TreeService]
                    }]
                }], e
            }()
        },
        TCh0: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = t.Keys = function(e) {
                    return e[e.Escape = 27] = "Escape", e
                }(t.Keys || {}),
                o = t.MouseButtons = function(e) {
                    return e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e
                }(t.MouseButtons || {});
            t.isLeftButtonClicked = function(e) {
                return e.button === o.Left
            }, t.isRightButtonClicked = function(e) {
                return e.button === o.Right
            }, t.isEscapePressed = function(e) {
                return e.keyCode === i.Escape
            }
        },
        Tff5: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("VE89"),
                o = n("buEt"),
                r = n("CcnG"),
                l = (n("urB8"), n("kQXf"));
            t.TreeService = function() {
                function e(e) {
                    this.nodeDraggableService = e, this.nodeMoved$ = new o.Subject, this.nodeRemoved$ = new o.Subject, this.nodeRenamed$ = new o.Subject, this.nodeCreated$ = new o.Subject, this.nodeSelected$ = new o.Subject, this.nodeUnselected$ = new o.Subject, this.nodeExpanded$ = new o.Subject, this.nodeCollapsed$ = new o.Subject, this.menuItemSelected$ = new o.Subject, this.loadNextLevel$ = new o.Subject, this.nodeChecked$ = new o.Subject, this.nodeUnchecked$ = new o.Subject, this.nodeIndetermined$ = new o.Subject, this.controllers = new Map, this.nodeRemoved$.subscribe(function(e) {
                        return e.node.removeItselfFromParent()
                    })
                }
                return e.prototype.unselectStream = function(e) {
                    return this.nodeSelected$.filter(function(t) {
                        return e !== t.node
                    })
                }, e.prototype.fireNodeRemoved = function(e) {
                    this.nodeRemoved$.next(new i.NodeRemovedEvent(e, e.positionInParent))
                }, e.prototype.fireNodeCreated = function(e) {
                    this.nodeCreated$.next(new i.NodeCreatedEvent(e))
                }, e.prototype.fireNodeSelected = function(e) {
                    this.nodeSelected$.next(new i.NodeSelectedEvent(e))
                }, e.prototype.fireNodeUnselected = function(e) {
                    this.nodeUnselected$.next(new i.NodeUnselectedEvent(e))
                }, e.prototype.fireNodeRenamed = function(e, t) {
                    this.nodeRenamed$.next(new i.NodeRenamedEvent(t, e, t.value))
                }, e.prototype.fireNodeMoved = function(e, t) {
                    this.nodeMoved$.next(new i.NodeMovedEvent(e, t))
                }, e.prototype.fireMenuItemSelected = function(e, t) {
                    this.menuItemSelected$.next(new i.MenuItemSelectedEvent(e, t))
                }, e.prototype.fireNodeSwitchFoldingType = function(e) {
                    e.isNodeExpanded() ? (this.fireNodeExpanded(e), this.shouldFireLoadNextLevel(e) && this.fireLoadNextLevel(e)) : e.isNodeCollapsed() && this.fireNodeCollapsed(e)
                }, e.prototype.fireNodeExpanded = function(e) {
                    this.nodeExpanded$.next(new i.NodeExpandedEvent(e))
                }, e.prototype.fireNodeCollapsed = function(e) {
                    this.nodeCollapsed$.next(new i.NodeCollapsedEvent(e))
                }, e.prototype.fireLoadNextLevel = function(e) {
                    this.loadNextLevel$.next(new i.LoadNextLevelEvent(e))
                }, e.prototype.fireNodeChecked = function(e) {
                    this.nodeChecked$.next(new i.NodeCheckedEvent(e))
                }, e.prototype.fireNodeUnchecked = function(e) {
                    this.nodeUnchecked$.next(new i.NodeUncheckedEvent(e))
                }, e.prototype.draggedStream = function(e, t) {
                    return this.nodeDraggableService.draggableNodeEvents$.filter(function(e) {
                        return e.target === t
                    }).filter(function(t) {
                        return !t.captured.tree.hasChild(e)
                    })
                }, e.prototype.setController = function(e, t) {
                    this.controllers.set(e, t)
                }, e.prototype.deleteController = function(e) {
                    this.controllers.has(e) && this.controllers.delete(e)
                }, e.prototype.getController = function(e) {
                    return this.controllers.has(e) ? this.controllers.get(e) : null
                }, e.prototype.hasController = function(e) {
                    return this.controllers.has(e)
                }, e.prototype.shouldFireLoadNextLevel = function(e) {
                    var t = e.node.emitLoadNextLevel && !e.node.loadChildren && !e.childrenAreBeingLoaded() && l.isEmpty(e.children);
                    return t && e.loadingChildrenRequested(), t
                }, e.prototype.fireNodeIndetermined = function(e) {
                    this.nodeIndetermined$.next(new i.NodeIndeterminedEvent(e))
                }, e.decorators = [{
                    type: r.Injectable
                }], e
            }()
        },
        VE89: function(e, t, n) {
            "use strict";
            var i = n("mrSG").__extends;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e) {
                this.node = e
            };
            t.NodeEvent = o, t.NodeSelectedEvent = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(o), t.NodeUnselectedEvent = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(o);
            var r = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(o);
            t.NodeDestructiveEvent = r, t.NodeMovedEvent = function(e) {
                function t(t, n) {
                    var i = e.call(this, t) || this;
                    return i.previousParent = n, i
                }
                return i(t, e), t
            }(r), t.NodeRemovedEvent = function(e) {
                function t(t, n) {
                    var i = e.call(this, t) || this;
                    return i.lastIndex = n, i
                }
                return i(t, e), t
            }(r), t.NodeCreatedEvent = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(r), t.NodeRenamedEvent = function(e) {
                function t(t, n, i) {
                    var o = e.call(this, t) || this;
                    return o.oldValue = n, o.newValue = i, o
                }
                return i(t, e), t
            }(r), t.NodeExpandedEvent = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(o), t.NodeCollapsedEvent = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(o), t.MenuItemSelectedEvent = function(e) {
                function t(t, n) {
                    var i = e.call(this, t) || this;
                    return i.selectedItem = n, i
                }
                return i(t, e), t
            }(o), t.LoadNextLevelEvent = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(o), t.NodeCheckedEvent = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(o), t.NodeUncheckedEvent = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(o), t.NodeIndeterminedEvent = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i(t, e), t
            }(o)
        },
        VUo1: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("CcnG");
            n("ZYjt"), t.SafeHtmlPipe = function() {
                function e(e) {
                    this.sanitizer = e
                }
                return e.prototype.transform = function(e) {
                    return this.sanitizer.bypassSecurityTrustHtml(e)
                }, e.decorators = [{
                    type: i.Pipe,
                    args: [{
                        name: "safeHtml"
                    }]
                }], e
            }()
        },
        buEt: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("DtyJ");
            n.d(t, "Subject", function() {
                return i.Subject
            })
        },
        kQXf: function(e, t, n) {
            "use strict";

            function i(e) {
                return "string" == typeof e ? !/\S/.test(e) : Array.isArray(e) ? 0 === e.length : r(e)
            }

            function o(e, t) {
                return !r(e) && e.indexOf(t) > -1
            }

            function r(e) {
                return void 0 === e || null === e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isEmpty = i, t.trim = function(e) {
                return r(e) ? "" : e.trim()
            }, t.has = function(e, t) {
                return e && "object" == typeof e && e.hasOwnProperty(t)
            }, t.isFunction = function(e) {
                return "function" == typeof e
            }, t.get = function(e, t, n) {
                for (var i = e, o = 0, l = t.split("."); o < l.length; o++) {
                    var s = l[o];
                    if (!i || !Reflect.has(i, s)) return n;
                    i = i[s]
                }
                return r(i) || i === e ? n : i
            }, t.omit = function(e, t) {
                if (!e) return e;
                var n = "string" == typeof t ? [t] : t;
                return Object.keys(e).reduce(function(t, i) {
                    return o(n, i) ? t : Object.assign(t, ((r = {})[i] = e[i], r));
                    var r
                }, {})
            }, t.size = function(e) {
                return i(e) ? 0 : e.length
            }, t.once = function(e) {
                var t;
                return function() {
                    for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                    return e && (t = e.apply(null, n), e = null), t
                }
            }, t.defaultsDeep = function e(t) {
                for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                return [t].concat(n).reduce(function(t, n) {
                    return n ? (Object.keys(n).forEach(function(i) {
                        r(t[i]) ? t[i] = n[i] : "object" != typeof t[i] || Array.isArray(t[i]) || (t[i] = e(t[i], n[i]))
                    }), t) : t
                }, {})
            }, t.includes = o, t.isNil = r
        },
        lJMN: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("QG5k"),
                o = n("TCh0"),
                r = n("kQXf");
            t.TreeController = function() {
                function e(e) {
                    this.component = e, this.tree = this.component.tree, this.treeService = this.component.treeService
                }
                return e.prototype.select = function() {
                    this.isSelected() || this.component.onNodeSelected({
                        button: o.MouseButtons.Left
                    })
                }, e.prototype.unselect = function() {
                    this.isSelected() && this.component.onNodeUnselected({
                        button: o.MouseButtons.Left
                    })
                }, e.prototype.isSelected = function() {
                    return this.component.isSelected
                }, e.prototype.expand = function() {
                    this.isCollapsed() && this.component.onSwitchFoldingType()
                }, e.prototype.expandToParent = function(e) {
                    var t = this;
                    if (void 0 === e && (e = this.tree), e) {
                        var n = this.treeService.getController(e.id);
                        n && requestAnimationFrame(function() {
                            n.expand(), t.expandToParent(e.parent)
                        })
                    }
                }, e.prototype.isExpanded = function() {
                    return this.tree.isNodeExpanded()
                }, e.prototype.collapse = function() {
                    this.isExpanded() && this.component.onSwitchFoldingType()
                }, e.prototype.isCollapsed = function() {
                    return this.tree.isNodeCollapsed()
                }, e.prototype.toTreeModel = function() {
                    return this.tree.toTreeModel()
                }, e.prototype.rename = function(e) {
                    this.tree.markAsBeingRenamed(), this.component.applyNewValue({
                        type: "keyup",
                        value: e
                    })
                }, e.prototype.remove = function() {
                    this.component.onMenuItemSelected({
                        nodeMenuItemAction: i.NodeMenuItemAction.Remove
                    })
                }, e.prototype.addChild = function(e) {
                    if (!this.tree.hasDeferredChildren() || this.tree.childrenWereLoaded()) {
                        var t = this.tree.createNode(Array.isArray(e.children), e);
                        this.treeService.fireNodeCreated(t)
                    }
                }, e.prototype.addChildAsync = function(e) {
                    if (this.tree.hasDeferredChildren() && !this.tree.childrenWereLoaded()) return Promise.reject(new Error("This node loads its children asynchronously, hence child cannot be added this way"));
                    var t = this.tree.createNode(Array.isArray(e.children), e);
                    return this.treeService.fireNodeCreated(t), new Promise(function(e) {
                        setTimeout(function() {
                            e(t)
                        })
                    })
                }, e.prototype.changeNodeId = function(e) {
                    if (!e) throw Error("You should supply an id!");
                    if (this.treeService.hasController(e)) throw Error("Controller already exists for the given id: " + e);
                    this.treeService.deleteController(this.tree.id), this.tree.id = e, this.treeService.setController(this.tree.id, this)
                }, e.prototype.reloadChildren = function() {
                    this.tree.reloadChildren()
                }, e.prototype.setChildren = function(e) {
                    this.tree.isLeaf() || this.tree.setChildren(e)
                }, e.prototype.startRenaming = function() {
                    this.tree.markAsBeingRenamed()
                }, e.prototype.check = function() {
                    this.component.onNodeChecked()
                }, e.prototype.uncheck = function() {
                    this.component.onNodeUnchecked()
                }, e.prototype.isChecked = function() {
                    return this.tree.checked
                }, e.prototype.isIndetermined = function() {
                    return r.get(this.component, "checkboxElementRef.nativeElement.indeterminate")
                }, e.prototype.allowSelection = function() {
                    this.tree.selectionAllowed = !0
                }, e.prototype.forbidSelection = function() {
                    this.tree.selectionAllowed = !1
                }, e.prototype.isSelectionAllowed = function() {
                    return this.tree.selectionAllowed
                }, e
            }()
        },
        lZOh: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("6blF"),
                o = n("F/XL");
            i.a.of = o.a
        },
        "nu/U": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("CcnG"),
                o = function() {},
                r = n("pMnS"),
                l = n("Ip0R"),
                s = n("ty8c"),
                d = n("FYBg"),
                u = n("JZ5S"),
                c = i["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function a(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 3, "li", [
                    ["class", "node-menu-item"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) {
                    var i = !0;
                    return "click" === t && (i = !1 !== e.component.onMenuItemSelected(n, e.context.$implicit) && i), i
                }, null, null)), (e()(), i["\u0275eld"](1, 0, null, null, 0, "div", [], [
                    [8, "className", 0]
                ], null, null, null, null)), (e()(), i["\u0275eld"](2, 0, null, null, 1, "span", [
                    ["class", "node-menu-item-value"]
                ], null, null, null, null, null)), (e()(), i["\u0275ted"](3, null, ["", ""]))], null, function(e, t) {
                    e(t, 1, 0, i["\u0275inlineInterpolate"](1, "node-menu-item-icon ", t.context.$implicit.cssClass, "")), e(t, 3, 0, t.context.$implicit.name)
                })
            }

            function p(e) {
                return i["\u0275vid"](0, [i["\u0275qud"](402653184, 1, {
                    menuContainer: 0
                }), (e()(), i["\u0275eld"](1, 0, null, null, 3, "div", [
                    ["class", "node-menu"]
                ], null, null, null, null, null)), (e()(), i["\u0275eld"](2, 0, [
                    [1, 0],
                    ["menuContainer", 1]
                ], null, 2, "ul", [
                    ["class", "node-menu-content"]
                ], null, null, null, null, null)), (e()(), i["\u0275and"](16777216, null, null, 1, null, a)), i["\u0275did"](4, 802816, null, 0, l.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(e, t) {
                    e(t, 4, 0, t.component.availableMenuItems)
                }, null)
            }
            var h = n("HHO+"),
                f = n("Tff5"),
                m = n("/TVo"),
                v = n("urB8"),
                g = n("VUo1"),
                y = n("ZYjt"),
                b = i["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function C(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "node-checkbox"]
                ], null, null, null, null, null)), (e()(), i["\u0275eld"](1, 0, [
                    [1, 0],
                    ["checkbox", 1]
                ], null, 0, "input", [
                    ["checkbox", ""],
                    ["type", "checkbox"]
                ], [
                    [8, "disabled", 0],
                    [8, "checked", 0]
                ], [
                    [null, "change"]
                ], function(e, t, n) {
                    var i = !0;
                    return "change" === t && (i = !1 !== e.component.switchNodeCheckStatus() && i), i
                }, null, null))], null, function(e, t) {
                    var n = t.component;
                    e(t, 1, 0, n.isReadOnly, n.tree.checked)
                })
            }

            function S(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "node-template"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), i["\u0275ppd"](1, 1)], null, function(e, t) {
                    var n = t.component;
                    e(t, 0, 0, i["\u0275unv"](t, 0, 0, e(t, 1, 0, i["\u0275nov"](t.parent.parent.parent, 0), n.tree.nodeTemplate)))
                })
            }

            function N(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "span", [
                    ["class", "node-name"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), i["\u0275ppd"](1, 1)], null, function(e, t) {
                    var n = t.component;
                    e(t, 0, 0, i["\u0275unv"](t, 0, 0, e(t, 1, 0, i["\u0275nov"](t.parent.parent.parent, 0), n.tree.value)))
                })
            }

            function M(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 0, "span", [
                    ["class", "loading-children"]
                ], null, null, null, null, null))], null, null)
            }

            function E(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275and"](0, null, null, 0))], null, null)
            }

            function I(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 9, "div", [
                    ["class", "node-value"]
                ], [
                    [2, "node-selected", null]
                ], [
                    [null, "click"]
                ], function(e, t, n) {
                    var i = !0;
                    return "click" === t && (i = !1 !== e.component.onNodeSelected(n) && i), i
                }, null, null)), (e()(), i["\u0275and"](16777216, null, null, 1, null, S)), i["\u0275did"](2, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, N)), i["\u0275did"](4, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, M)), i["\u0275did"](6, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 2, null, E)), i["\u0275did"](8, 540672, null, 0, l.NgTemplateOutlet, [i.ViewContainerRef], {
                    ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
                    ngTemplateOutlet: [1, "ngTemplateOutlet"]
                }, null), i["\u0275pod"](9, {
                    $implicit: 0
                })], function(e, t) {
                    var n = t.component;
                    e(t, 2, 0, n.tree.nodeTemplate), e(t, 4, 0, !n.template), e(t, 6, 0, n.tree.childrenAreBeingLoaded()), e(t, 8, 0, e(t, 9, 0, n.tree.node), n.template)
                }, function(e, t) {
                    e(t, 0, 0, t.component.isSelected)
                })
            }

            function T(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "input", [
                    ["class", "node-value"],
                    ["type", "text"]
                ], null, [
                    [null, "valueChanged"],
                    [null, "keyup.enter"],
                    [null, "blur"],
                    [null, "keyup.esc"]
                ], function(e, t, n) {
                    var o = !0,
                        r = e.component;
                    return "keyup.enter" === t && (o = !1 !== i["\u0275nov"](e, 1).applyNewValue(n.target.value) && o), "blur" === t && (o = !1 !== i["\u0275nov"](e, 1).applyNewValueByLoosingFocus(n.target.value) && o), "keyup.esc" === t && (o = !1 !== i["\u0275nov"](e, 1).cancelEditing() && o), "valueChanged" === t && (o = !1 !== r.applyNewValue(n) && o), o
                }, null, null)), i["\u0275did"](1, 81920, null, 0, s.NodeEditableDirective, [i.Renderer2, i.ElementRef], {
                    nodeValue: [0, "nodeValue"]
                }, {
                    valueChanged: "valueChanged"
                })], function(e, t) {
                    e(t, 1, 0, t.component.tree.value)
                }, null)
            }

            function w(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "node-left-menu"]
                ], [
                    [8, "innerHTML", 1]
                ], [
                    [null, "click"]
                ], function(e, t, n) {
                    var i = !0;
                    return "click" === t && (i = !1 !== e.component.showLeftMenu(n) && i), i
                }, null, null))], null, function(e, t) {
                    e(t, 0, 0, t.component.tree.leftMenuTemplate)
                })
            }

            function R(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "node-menu", [], null, [
                    [null, "menuItemSelected"]
                ], function(e, t, n) {
                    var i = !0;
                    return "menuItemSelected" === t && (i = !1 !== e.component.onMenuItemSelected(n) && i), i
                }, p, c)), i["\u0275did"](1, 245760, null, 0, d.NodeMenuComponent, [i.Renderer2, u.NodeMenuService], null, {
                    menuItemSelected: "menuItemSelected"
                })], function(e, t) {
                    e(t, 1, 0)
                }, null)
            }

            function k(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "node-menu", [], null, [
                    [null, "menuItemSelected"]
                ], function(e, t, n) {
                    var i = !0;
                    return "menuItemSelected" === t && (i = !1 !== e.component.onMenuItemSelected(n) && i), i
                }, p, c)), i["\u0275did"](1, 245760, null, 0, d.NodeMenuComponent, [i.Renderer2, u.NodeMenuService], null, {
                    menuItemSelected: "menuItemSelected"
                })], function(e, t) {
                    e(t, 1, 0)
                }, null)
            }

            function x(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "node-menu", [], null, [
                    [null, "menuItemSelected"]
                ], function(e, t, n) {
                    var i = !0;
                    return "menuItemSelected" === t && (i = !1 !== e.component.onMenuItemSelected(n) && i), i
                }, p, c)), i["\u0275did"](1, 245760, null, 0, d.NodeMenuComponent, [i.Renderer2, u.NodeMenuService], {
                    menuItems: [0, "menuItems"]
                }, {
                    menuItemSelected: "menuItemSelected"
                })], function(e, t) {
                    e(t, 1, 0, t.component.tree.menuItems)
                }, null)
            }

            function _(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "tree-internal", [], null, null, null, F, b)), i["\u0275did"](1, 4964352, null, 0, h.TreeInternalComponent, [u.NodeMenuService, f.TreeService, i.ElementRef], {
                    tree: [0, "tree"],
                    settings: [1, "settings"],
                    template: [2, "template"]
                }, null)], function(e, t) {
                    var n = t.component;
                    e(t, 1, 0, t.context.$implicit, n.settings, n.template)
                }, null)
            }

            function L(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, l.NgStyle, [i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), i["\u0275pod"](2, {
                    display: 0
                }), (e()(), i["\u0275and"](16777216, null, null, 2, null, _)), i["\u0275did"](4, 802816, null, 0, l.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), i["\u0275pid"](131072, l.AsyncPipe, [i.ChangeDetectorRef])], function(e, t) {
                    var n = t.component;
                    e(t, 1, 0, e(t, 2, 0, n.tree.isNodeExpanded() ? "block" : "none")), e(t, 4, 0, i["\u0275unv"](t, 4, 0, i["\u0275nov"](t, 5).transform(n.tree.childrenAsync)))
                }, null)
            }

            function O(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "tree-internal", [], null, null, null, F, b)), i["\u0275did"](1, 4964352, null, 0, h.TreeInternalComponent, [u.NodeMenuService, f.TreeService, i.ElementRef], {
                    tree: [0, "tree"],
                    settings: [1, "settings"],
                    template: [2, "template"]
                }, null)], function(e, t) {
                    var n = t.component;
                    e(t, 1, 0, t.context.$implicit, n.settings, n.template)
                }, null)
            }

            function A(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275and"](16777216, null, null, 2, null, O)), i["\u0275did"](1, 802816, null, 0, l.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), i["\u0275pid"](131072, l.AsyncPipe, [i.ChangeDetectorRef]), (e()(), i["\u0275and"](0, null, null, 0))], function(e, t) {
                    var n = t.component;
                    e(t, 1, 0, i["\u0275unv"](t, 1, 0, i["\u0275nov"](t, 2).transform(n.tree.childrenAsync)))
                }, null)
            }

            function D(e) {
                return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 27, "ul", [
                    ["class", "tree"]
                ], null, null, null, null, null)), i["\u0275did"](1, 278528, null, 0, l.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), i["\u0275pod"](2, {
                    rootless: 0
                }), (e()(), i["\u0275eld"](3, 0, null, null, 24, "li", [], null, null, null, null, null)), (e()(), i["\u0275eld"](4, 0, null, null, 15, "div", [
                    ["class", "value-container"]
                ], [
                    [2, "selected", null]
                ], [
                    [null, "contextmenu"]
                ], function(e, t, n) {
                    var i = !0;
                    return "contextmenu" === t && (i = !1 !== e.component.showRightMenu(n) && i), i
                }, null, null)), i["\u0275did"](5, 278528, null, 0, l.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), i["\u0275pod"](6, {
                    rootless: 0
                }), i["\u0275did"](7, 212992, null, 0, m.NodeDraggableDirective, [i.ElementRef, v.NodeDraggableService, i.Renderer2], {
                    nodeDraggable: [0, "nodeDraggable"],
                    tree: [1, "tree"]
                }, null), (e()(), i["\u0275eld"](8, 0, null, null, 1, "div", [
                    ["class", "folding"]
                ], null, [
                    [null, "click"]
                ], function(e, t, n) {
                    var i = !0;
                    return "click" === t && (i = !1 !== e.component.onSwitchFoldingType() && i), i
                }, null, null)), i["\u0275did"](9, 278528, null, 0, l.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, C)), i["\u0275did"](11, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, I)), i["\u0275did"](13, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, T)), i["\u0275did"](15, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, w)), i["\u0275did"](17, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, R)), i["\u0275did"](19, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, k)), i["\u0275did"](21, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, x)), i["\u0275did"](23, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, L)), i["\u0275did"](25, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (e()(), i["\u0275and"](16777216, null, null, 1, null, A)), i["\u0275did"](27, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(e, t) {
                    var n = t.component;
                    e(t, 1, 0, "tree", e(t, 2, 0, n.isRootHidden())), e(t, 5, 0, "value-container", e(t, 6, 0, n.isRootHidden())), e(t, 7, 0, n.nodeElementRef, n.tree), e(t, 9, 0, "folding", n.tree.foldingCssClass), e(t, 11, 0, n.settings.showCheckboxes), e(t, 13, 0, !n.shouldShowInputForTreeValue()), e(t, 15, 0, n.shouldShowInputForTreeValue()), e(t, 17, 0, n.tree.hasLeftMenu()), e(t, 19, 0, n.tree.hasLeftMenu() && n.isLeftMenuVisible && !n.hasCustomMenu()), e(t, 21, 0, n.isRightMenuVisible && !n.hasCustomMenu()), e(t, 23, 0, n.hasCustomMenu() && (n.isRightMenuVisible || n.isLeftMenuVisible)), e(t, 25, 0, n.tree.keepNodesInDOM()), e(t, 27, 0, n.tree.isNodeExpanded() && !n.tree.keepNodesInDOM())
                }, function(e, t) {
                    e(t, 4, 0, t.component.isSelected)
                })
            }

            function F(e) {
                return i["\u0275vid"](0, [i["\u0275pid"](0, g.SafeHtmlPipe, [y.DomSanitizer]), i["\u0275qud"](671088640, 1, {
                    checkboxElementRef: 0
                }), (e()(), i["\u0275and"](16777216, null, null, 1, null, D)), i["\u0275did"](3, 16384, null, 0, l.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(e, t) {
                    e(t, 3, 0, t.component.tree)
                }, null)
            }
            var V = n("xtUU"),
                P = i["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function j(e) {
                return i["\u0275vid"](0, [i["\u0275qud"](402653184, 1, {
                    rootComponent: 0
                }), (e()(), i["\u0275eld"](1, 0, null, null, 1, "tree-internal", [], null, null, null, F, b)), i["\u0275did"](2, 4964352, [
                    [1, 4],
                    ["rootComponent", 4]
                ], 0, h.TreeInternalComponent, [u.NodeMenuService, f.TreeService, i.ElementRef], {
                    tree: [0, "tree"],
                    settings: [1, "settings"],
                    template: [2, "template"]
                }, null)], function(e, t) {
                    var n = t.component;
                    e(t, 2, 0, n.tree, n.settings, n.template)
                }, null)
            }
            var $ = n("c+eF"),
                B = function() {
                    function e(e) {
                        this.pageTitleService = e, this.ffs = {
                            value: "/",
                            id: 1,
                            settings: {
                                cssClasses: {
                                    expanded: "fa fa-caret-down",
                                    collapsed: "fa fa-caret-right",
                                    empty: "fa fa-caret-right disabled",
                                    leaf: "fa"
                                },
                                templates: {
                                    node: '<i class="fa fa-folder-o"></i>',
                                    leaf: '<i class="fa fa-file-o"></i>'
                                }
                            },
                            children: [{
                                value: "bin",
                                id: 2,
                                children: [{
                                    value: "bash",
                                    id: 3
                                }, {
                                    value: "umount",
                                    id: 4
                                }, {
                                    value: "cp",
                                    id: 5
                                }, {
                                    value: "less",
                                    id: 6
                                }, {
                                    value: "rmdir",
                                    id: 7
                                }, {
                                    value: "touch",
                                    id: 8
                                }, {
                                    value: "chgrp",
                                    id: 9
                                }, {
                                    value: "chmod",
                                    id: 10
                                }, {
                                    value: "chown",
                                    id: 11
                                }, {
                                    value: "nano",
                                    id: 12
                                }]
                            }, {
                                value: "boot",
                                id: 13,
                                children: [{
                                    value: "grub",
                                    id: 14,
                                    children: [{
                                        value: "fonts",
                                        id: 15
                                    }, {
                                        value: "gfxblacklist.txt",
                                        id: 16
                                    }, {
                                        value: "grub.cfg",
                                        id: 17
                                    }, {
                                        value: "grubenv",
                                        id: 18
                                    }, {
                                        value: "i386-pc",
                                        id: 19
                                    }, {
                                        value: "locale",
                                        id: 20
                                    }, {
                                        value: "unicode.pf2",
                                        id: 21
                                    }]
                                }, {
                                    value: "lost+found",
                                    id: 22,
                                    children: []
                                }, {
                                    value: "abi-4.4.0-57-generic",
                                    id: 23
                                }, {
                                    value: "config-4.4.0-57-generic",
                                    id: 24
                                }, {
                                    value: "initrd.img-4.4.0-47-generic",
                                    id: 25
                                }, {
                                    value: "initrd.img-4.4.0-57-generic",
                                    id: 26
                                }, {
                                    value: "memtest86+.bin",
                                    id: 27
                                }, {
                                    value: "System.map-4.4.0-57-generic",
                                    id: 28
                                }, {
                                    value: "memtest86+.elf",
                                    id: 29
                                }, {
                                    value: "vmlinuz-4.4.0-57-generic",
                                    id: 30
                                }, {
                                    value: "memtest86+_multiboot.bin",
                                    id: 31
                                }]
                            }, {
                                value: "build-no-left-no-right-menus",
                                id: 32,
                                settings: {
                                    leftMenu: !1,
                                    rightMenu: !1
                                },
                                children: [{
                                    value: "php5-left-menu",
                                    id: 33,
                                    settings: {
                                        leftMenu: !0
                                    }
                                }, {
                                    value: "grails-left-menu",
                                    id: 335,
                                    settings: {
                                        leftMenu: !0
                                    }
                                }, {
                                    value: "python-right-menu",
                                    id: 333,
                                    settings: {
                                        rightMenu: !0
                                    }
                                }]
                            }, {
                                value: "cdrom",
                                id: 34,
                                children: []
                            }, {
                                value: "dev",
                                id: 35,
                                children: []
                            }, {
                                value: "etc",
                                id: 36,
                                loadChildren: function(e) {
                                    console.log("callback function called to load etc`s children"), setTimeout(function() {
                                        e([{
                                            value: "apache2",
                                            id: 82,
                                            children: []
                                        }, {
                                            value: "nginx",
                                            id: 83,
                                            children: []
                                        }, {
                                            value: "dhcp",
                                            id: 84,
                                            children: []
                                        }, {
                                            value: "dpkg",
                                            id: 85,
                                            children: []
                                        }])
                                    })
                                }
                            }, {
                                value: "home",
                                id: 37,
                                children: [{
                                    value: "firstUser",
                                    id: 38,
                                    children: [{
                                        value: "Documents",
                                        id: 39,
                                        children: [{
                                            value: "home",
                                            id: 40,
                                            children: [{
                                                value: "bills",
                                                id: 41,
                                                children: [{
                                                    value: "2016-07-01-mobile.pdf",
                                                    id: 42
                                                }, {
                                                    value: "2016-07-01-electricity.pdf",
                                                    id: 43
                                                }, {
                                                    value: "2016-07-01-water.pdf",
                                                    id: 44
                                                }, {
                                                    value: "2016-07-01-internet.pdf",
                                                    id: 45
                                                }, {
                                                    value: "2016-08-01-mobile.pdf",
                                                    id: 46
                                                }, {
                                                    value: "2016-10-01-internet.pdf",
                                                    id: 47
                                                }]
                                            }, {
                                                value: "photos",
                                                id: 48,
                                                children: []
                                            }]
                                        }]
                                    }, {
                                        value: "Downloads",
                                        id: 49,
                                        children: []
                                    }, {
                                        value: "Desktop",
                                        id: 50,
                                        children: []
                                    }, {
                                        value: "Pictures",
                                        id: 51,
                                        children: []
                                    }, {
                                        value: "Music",
                                        id: 52,
                                        children: [{
                                            value: "won't be displayed"
                                        }],
                                        loadChildren: function(e) {
                                            setTimeout(function() {
                                                e([{
                                                    value: "2Cellos",
                                                    id: 78,
                                                    children: []
                                                }, {
                                                    value: "Michael Jackson",
                                                    id: 79,
                                                    children: []
                                                }, {
                                                    value: "AC/DC",
                                                    id: 80,
                                                    children: []
                                                }, {
                                                    value: "Adel",
                                                    id: 81,
                                                    children: []
                                                }])
                                            }, 5e3)
                                        }
                                    }, {
                                        value: "Public",
                                        id: 53,
                                        children: []
                                    }]
                                }, {
                                    value: "secondUser - left menu templates",
                                    id: 54,
                                    settings: {
                                        leftMenu: !0
                                    },
                                    children: [{
                                        value: "Documents",
                                        id: 55,
                                        children: []
                                    }, {
                                        value: "Downloads - custom left menu template",
                                        id: 56,
                                        settings: {
                                            templates: {
                                                leftMenu: '<i class="fa fa-navicon"></i>'
                                            }
                                        },
                                        children: [{
                                            value: "Actobat3",
                                            id: 57
                                        }, {
                                            value: "Complib",
                                            id: 58
                                        }, {
                                            value: "Eudora",
                                            id: 59
                                        }, {
                                            value: "java",
                                            id: 60
                                        }, {
                                            value: "drivers",
                                            id: 61
                                        }, {
                                            value: "kathy",
                                            id: 62
                                        }]
                                    }, {
                                        value: "Desktop",
                                        id: 63,
                                        children: []
                                    }, {
                                        value: "Pictures",
                                        id: 64,
                                        children: []
                                    }, {
                                        value: "Music",
                                        id: 65,
                                        children: []
                                    }, {
                                        value: "Public",
                                        id: 66,
                                        children: []
                                    }]
                                }]
                            }, {
                                value: "lib",
                                id: 67,
                                children: []
                            }, {
                                value: "media",
                                id: 68,
                                children: []
                            }, {
                                value: "opt",
                                id: 69,
                                children: []
                            }, {
                                value: "proc",
                                id: 70,
                                children: []
                            }, {
                                value: "root",
                                id: 71,
                                children: []
                            }, {
                                value: "run",
                                id: 72,
                                children: []
                            }, {
                                value: "sbin",
                                id: 73,
                                children: []
                            }, {
                                value: "srv",
                                id: 74,
                                children: []
                            }, {
                                value: "sys",
                                id: 75,
                                children: []
                            }, {
                                value: "usr",
                                id: 76,
                                children: []
                            }, {
                                value: "var",
                                id: 77,
                                children: []
                            }]
                        }, this.lastFFSNodeId = 86
                    }
                    return e.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("File Manager")
                    }, e
                }(),
                U = i["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".tree i{margin:0 .5rem}"]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "fadeInAnimation",
                            definitions: [{
                                type: 1,
                                expr: "void => *",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        opacity: 0
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 1
                                        },
                                        offset: null
                                    },
                                    timings: "400ms 150ms ease-in-out"
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function G(e) {
                return i["\u0275vid"](0, [i["\u0275qud"](402653184, 1, {
                    treeFFS: 0
                }), (e()(), i["\u0275eld"](1, 0, null, null, 10, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (e()(), i["\u0275eld"](2, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (e()(), i["\u0275eld"](3, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (e()(), i["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (e()(), i["\u0275eld"](5, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (e()(), i["\u0275ted"](-1, null, ["File Manager"])), (e()(), i["\u0275eld"](7, 0, null, null, 4, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (e()(), i["\u0275eld"](8, 0, null, null, 3, "tree", [], null, null, null, j, P)), i["\u0275prd"](512, null, f.TreeService, f.TreeService, [v.NodeDraggableService]), i["\u0275did"](10, 770048, [
                    [1, 4],
                    ["treeFFS", 4]
                ], 1, V.TreeComponent, [f.TreeService], {
                    treeModel: [0, "treeModel"]
                }, null), i["\u0275qud"](335544320, 2, {
                    template: 0
                })], function(e, t) {
                    e(t, 10, 0, t.component.ffs)
                }, null)
            }
            var H = i["\u0275ccf"]("ms-file-manager", B, function(e) {
                    return i["\u0275vid"](0, [(e()(), i["\u0275eld"](0, 0, null, null, 1, "ms-file-manager", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, G, U)), i["\u0275did"](1, 114688, null, 0, B, [$.a], null, null)], function(e, t) {
                        e(t, 1, 0)
                    }, function(e, t) {
                        e(t, 0, 0, !0)
                    })
                }, {}, {}, []),
                Z = n("gIcY"),
                Q = n("STEd"),
                q = n("ZYCi");
            n.d(t, "FileManagerModuleNgFactory", function() {
                return J
            });
            var J = i["\u0275cmf"](o, [], function(e) {
                return i["\u0275mod"]([i["\u0275mpd"](512, i.ComponentFactoryResolver, i["\u0275CodegenComponentFactoryResolver"], [
                    [8, [r.a, H]],
                    [3, i.ComponentFactoryResolver], i.NgModuleRef
                ]), i["\u0275mpd"](4608, l.NgLocalization, l.NgLocaleLocalization, [i.LOCALE_ID, [2, l["\u0275angular_packages_common_common_a"]]]), i["\u0275mpd"](4608, Z["\u0275angular_packages_forms_forms_i"], Z["\u0275angular_packages_forms_forms_i"], []), i["\u0275mpd"](4608, v.NodeDraggableService, v.NodeDraggableService, []), i["\u0275mpd"](4608, u.NodeMenuService, u.NodeMenuService, []), i["\u0275mpd"](4608, f.TreeService, f.TreeService, [v.NodeDraggableService]), i["\u0275mpd"](1073742336, l.CommonModule, l.CommonModule, []), i["\u0275mpd"](1073742336, Z["\u0275angular_packages_forms_forms_bb"], Z["\u0275angular_packages_forms_forms_bb"], []), i["\u0275mpd"](1073742336, Z.FormsModule, Z.FormsModule, []), i["\u0275mpd"](1073742336, Q.TreeModule, Q.TreeModule, []), i["\u0275mpd"](1073742336, q.p, q.p, [
                    [2, q.v],
                    [2, q.m]
                ]), i["\u0275mpd"](1073742336, o, o, []), i["\u0275mpd"](1024, q.k, function() {
                    return [
                        [{
                            path: "",
                            component: B
                        }]
                    ]
                }, [])])
            })
        },
        tKjC: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("6blF"),
                o = n("p0ib");
            i.a.prototype.merge = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return this.lift.call(o.a.apply(void 0, [this].concat(e)))
            }
        },
        ty8c: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("CcnG"),
                o = n("1PfE");
            t.NodeEditableDirective = function() {
                function e(e, t) {
                    this.renderer = e, this.elementRef = t, this.valueChanged = new i.EventEmitter(!1)
                }
                return e.prototype.ngOnInit = function() {
                    var e = this.elementRef.nativeElement;
                    e && e.focus(), this.renderer.setProperty(e, "value", this.nodeValue)
                }, e.prototype.applyNewValue = function(e) {
                    this.valueChanged.emit({
                        type: "keyup",
                        value: e
                    })
                }, e.prototype.applyNewValueByLoosingFocus = function(e) {
                    this.valueChanged.emit({
                        type: "blur",
                        value: e
                    })
                }, e.prototype.cancelEditing = function() {
                    this.valueChanged.emit({
                        type: "keyup",
                        value: this.nodeValue,
                        action: o.NodeEditableEventAction.Cancel
                    })
                }, e.decorators = [{
                    type: i.Directive,
                    args: [{
                        selector: "[nodeEditable]"
                    }]
                }], e.propDecorators = {
                    nodeValue: [{
                        type: i.Input,
                        args: ["nodeEditable"]
                    }],
                    valueChanged: [{
                        type: i.Output
                    }],
                    applyNewValue: [{
                        type: i.HostListener,
                        args: ["keyup.enter", ["$event.target.value"]]
                    }],
                    applyNewValueByLoosingFocus: [{
                        type: i.HostListener,
                        args: ["blur", ["$event.target.value"]]
                    }],
                    cancelEditing: [{
                        type: i.HostListener,
                        args: ["keyup.esc"]
                    }]
                }, e
            }()
        },
        urB8: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("CcnG"),
                o = n("buEt"),
                r = n("QGcS");
            t.NodeDraggableService = function() {
                function e() {
                    this.draggableNodeEvents$ = new o.Subject
                }
                return e.prototype.fireNodeDragged = function(e, t) {
                    e.tree && !e.tree.isStatic() && this.draggableNodeEvents$.next(new r.NodeDraggableEvent(e, t))
                }, e.prototype.captureNode = function(e) {
                    this.capturedNode = e
                }, e.prototype.getCapturedNode = function() {
                    return this.capturedNode
                }, e.prototype.releaseCapturedNode = function() {
                    this.capturedNode = null
                }, e.decorators = [{
                    type: i.Injectable
                }], e
            }()
        },
        xZld: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("kQXf"),
                o = n("88/t"),
                r = n("58b6"),
                l = n("xk4V"),
                s = function(e) {
                    return e[e.NotStarted = 0] = "NotStarted", e[e.Loading = 1] = "Loading", e[e.Completed = 2] = "Completed", e
                }({});
            t.Tree = function() {
                function e(t, n, r) {
                    void 0 === n && (n = null), void 0 === r && (r = !1);
                    var l = this;
                    this._childrenLoadingState = s.NotStarted, this._childrenAsyncOnce = i.once(function() {
                        return new o.Observable(function(t) {
                            setTimeout(function() {
                                l._childrenLoadingState = s.Loading, l._loadChildren(function(n) {
                                    l._children = (n || []).map(function(t) {
                                        return new e(t, l)
                                    }), l._childrenLoadingState = s.Completed, t.next(l.children), t.complete()
                                })
                            })
                        })
                    }), this.buildTreeFromModel(t, n, r || Array.isArray(t.children))
                }
                return e.isValueEmpty = function(e) {
                    return i.isEmpty(i.trim(e))
                }, e.isRenamable = function(e) {
                    return i.has(e, "setName") && i.isFunction(e.setName) && i.has(e, "toString") && i.isFunction(e.toString) && e.toString !== Object.toString
                }, e.cloneTreeShallow = function(t) {
                    var n = new e(Object.assign({}, t.node));
                    return n._children = t._children, n
                }, e.applyNewValueToRenamable = function(e, t) {
                    var n = Object.assign({}, e);
                    return n.setName(t), n
                }, e.prototype.buildTreeFromModel = function(t, n, o) {
                    var l = this;
                    this.parent = n, this.node = Object.assign(i.omit(t, "children"), {
                        settings: r.TreeModelSettings.merge(t, i.get(n, "node"))
                    }, {
                        emitLoadNextLevel: !0 === t.emitLoadNextLevel
                    }), i.isFunction(this.node.loadChildren) ? this._loadChildren = this.node.loadChildren : i.get(t, "children", []).forEach(function(t, n) {
                        l._addChild(new e(t, l), n)
                    }), Array.isArray(this._children) || (this._children = this.node.loadChildren || o ? [] : null)
                }, e.prototype.hasDeferredChildren = function() {
                    return "function" == typeof this._loadChildren
                }, e.prototype.loadingChildrenRequested = function() {
                    this._childrenLoadingState = s.Loading
                }, e.prototype.childrenAreBeingLoaded = function() {
                    return this._childrenLoadingState === s.Loading
                }, e.prototype.childrenWereLoaded = function() {
                    return this._childrenLoadingState === s.Completed
                }, e.prototype.canLoadChildren = function() {
                    return this._childrenLoadingState === s.NotStarted && this.foldingType === r.FoldingType.Expanded && !!this._loadChildren
                }, e.prototype.childrenShouldBeLoaded = function() {
                    return !(this.childrenWereLoaded() || !this._loadChildren && !0 !== this.node.emitLoadNextLevel)
                }, Object.defineProperty(e.prototype, "children", {
                    get: function() {
                        return this._children
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "childrenAsync", {
                    get: function() {
                        return this.canLoadChildren() ? this._childrenAsyncOnce() : o.Observable.of(this.children)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.reloadChildren = function() {
                    var t = this;
                    this.childrenShouldBeLoaded() && (this._childrenLoadingState = s.Loading, this._loadChildren(function(n) {
                        t._children = n && n.map(function(n) {
                            return new e(n, t)
                        }), t._childrenLoadingState = s.Completed
                    }))
                }, e.prototype.setChildren = function(t) {
                    var n = this;
                    this._children = t && t.map(function(t) {
                        return new e(t, n)
                    }), this.childrenShouldBeLoaded() && (this._childrenLoadingState = s.Completed)
                }, e.prototype.createNode = function(t, n) {
                    void 0 === n && (n = {
                        value: ""
                    });
                    var i = new e(n, this, t);
                    return n.id || i.markAsNew(), i.id = i.id || l(), !this.childrenShouldBeLoaded() || this.childrenAreBeingLoaded() || this.childrenWereLoaded() ? this.isLeaf() ? this.addSibling(i) : this.addChild(i) : null
                }, Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this.node.value
                    },
                    set: function(t) {
                        if ("string" == typeof t || e.isRenamable(t)) {
                            var n = "" + t;
                            this.node.value = e.isRenamable(this.value) ? e.applyNewValueToRenamable(this.value, n) : e.isValueEmpty(n) ? this.node.value : n
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "checked", {
                    get: function() {
                        return !!i.get(this.node.settings, "checked")
                    },
                    set: function(e) {
                        this.node.settings = Object.assign({}, this.node.settings, {
                            checked: e
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "checkedChildren", {
                    get: function() {
                        return this.hasLoadedChildern() ? this.children.filter(function(e) {
                            return e.checked
                        }) : []
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "selectionAllowed", {
                    get: function() {
                        var e = i.get(this.node.settings, "selectionAllowed");
                        return !!i.isNil(e) || !!e
                    },
                    set: function(e) {
                        this.node.settings = Object.assign({}, this.node.settings, {
                            selectionAllowed: e
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.hasLoadedChildern = function() {
                    return !i.isEmpty(this.children)
                }, e.prototype.loadedChildrenAmount = function() {
                    return i.size(this.children)
                }, e.prototype.checkedChildrenAmount = function() {
                    return i.size(this.checkedChildren)
                }, e.prototype.addSibling = function(e, t) {
                    return Array.isArray(i.get(this.parent, "children")) ? this.parent.addChild(e, t) : null
                }, e.prototype.addChild = function(t, n) {
                    var i = this._addChild(e.cloneTreeShallow(t), n);
                    return this._setFoldingType(), this.isNodeCollapsed() && this.switchFoldingType(), i
                }, e.prototype._addChild = function(e, t) {
                    return void 0 === t && (t = i.size(this._children) || 0), e.parent = this, Array.isArray(this._children) ? this._children.splice(t, 0, e) : this._children = [e], e
                }, e.prototype.swapWithSibling = function(e) {
                    if (this.hasSibling(e)) {
                        var t = this.positionInParent;
                        this.parent._children[e.positionInParent] = this, this.parent._children[t] = e
                    }
                }, Object.defineProperty(e.prototype, "positionInParent", {
                    get: function() {
                        return this.isRoot() ? -1 : this.parent.children ? this.parent.children.indexOf(this) : -1
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isStatic = function() {
                    return i.get(this.node.settings, "static", !1)
                }, e.prototype.hasLeftMenu = function() {
                    return !i.get(this.node.settings, "static", !1) && i.get(this.node.settings, "leftMenu", !1)
                }, e.prototype.hasRightMenu = function() {
                    return !i.get(this.node.settings, "static", !1) && i.get(this.node.settings, "rightMenu", !1)
                }, e.prototype.isLeaf = function() {
                    return !this.isBranch()
                }, Object.defineProperty(e.prototype, "menuItems", {
                    get: function() {
                        return i.get(this.node.settings, "menuItems")
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.hasCustomMenu = function() {
                    return !this.isStatic() && !!i.get(this.node.settings, "menuItems", !1)
                }, e.prototype.isBranch = function() {
                    return !0 === this.node.emitLoadNextLevel || Array.isArray(this._children)
                }, e.prototype.hasChildren = function() {
                    return !i.isEmpty(this._children) || this.childrenShouldBeLoaded()
                }, e.prototype.isRoot = function() {
                    return i.isNil(this.parent)
                }, e.prototype.hasSibling = function(e) {
                    return !this.isRoot() && i.includes(this.parent.children, e)
                }, e.prototype.hasChild = function(e) {
                    return i.includes(this._children, e)
                }, e.prototype.removeChild = function(e) {
                    if (this.hasChildren()) {
                        var t = this._children.findIndex(function(t) {
                            return t === e
                        });
                        t >= 0 && this._children.splice(t, 1), this._setFoldingType()
                    }
                }, e.prototype.removeItselfFromParent = function() {
                    this.parent && this.parent.removeChild(this)
                }, e.prototype.switchFoldingType = function() {
                    !this.isLeaf() && this.hasChildren() && (this.disableCollapseOnInit(), this.node._foldingType = this.isNodeExpanded() ? r.FoldingType.Collapsed : r.FoldingType.Expanded)
                }, e.prototype.isNodeExpanded = function() {
                    return this.foldingType === r.FoldingType.Expanded
                }, e.prototype.isNodeCollapsed = function() {
                    return this.foldingType === r.FoldingType.Collapsed
                }, e.prototype._setFoldingType = function() {
                    this.node._foldingType = this.childrenShouldBeLoaded() ? r.FoldingType.Collapsed : this._children && !i.isEmpty(this._children) ? this.isCollapsedOnInit() ? r.FoldingType.Collapsed : r.FoldingType.Expanded : Array.isArray(this._children) ? r.FoldingType.Empty : r.FoldingType.Leaf
                }, Object.defineProperty(e.prototype, "foldingType", {
                    get: function() {
                        return this.node._foldingType || this._setFoldingType(), this.node._foldingType
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "foldingCssClass", {
                    get: function() {
                        return this.getCssClassesFromSettings() || this.foldingType.cssClass
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getCssClassesFromSettings = function() {
                    return this.node._foldingType || this._setFoldingType(), i.get(this.node.settings, this.node._foldingType === r.FoldingType.Collapsed ? "cssClasses.collapsed" : this.node._foldingType === r.FoldingType.Expanded ? "cssClasses.expanded" : this.node._foldingType === r.FoldingType.Empty ? "cssClasses.empty" : "cssClasses.leaf", null)
                }, Object.defineProperty(e.prototype, "nodeTemplate", {
                    get: function() {
                        return this.getTemplateFromSettings()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.getTemplateFromSettings = function() {
                    return this.isLeaf() ? i.get(this.node.settings, "templates.leaf", "") : i.get(this.node.settings, "templates.node", "")
                }, Object.defineProperty(e.prototype, "leftMenuTemplate", {
                    get: function() {
                        return this.hasLeftMenu() ? i.get(this.node.settings, "templates.leftMenu", "<span></span>") : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.disableCollapseOnInit = function() {
                    this.node.settings && (this.node.settings.isCollapsedOnInit = !1)
                }, e.prototype.isCollapsedOnInit = function() {
                    return !!i.get(this.node.settings, "isCollapsedOnInit")
                }, e.prototype.keepNodesInDOM = function() {
                    return i.get(this.node.settings, "keepNodesInDOM")
                }, e.prototype.isNew = function() {
                    return this.node._status === r.TreeStatus.New
                }, Object.defineProperty(e.prototype, "id", {
                    get: function() {
                        return i.get(this.node, "id")
                    },
                    set: function(e) {
                        this.node.id = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.markAsNew = function() {
                    this.node._status = r.TreeStatus.New
                }, e.prototype.isBeingRenamed = function() {
                    return this.node._status === r.TreeStatus.IsBeingRenamed
                }, e.prototype.markAsBeingRenamed = function() {
                    this.node._status = r.TreeStatus.IsBeingRenamed
                }, e.prototype.isModified = function() {
                    return this.node._status === r.TreeStatus.Modified
                }, e.prototype.markAsModified = function() {
                    this.node._status = r.TreeStatus.Modified
                }, e.prototype.toTreeModel = function() {
                    var e = i.defaultsDeep(this.isLeaf() ? {} : {
                        children: []
                    }, this.node);
                    return this.children && this.children.forEach(function(t) {
                        e.children.push(t.toTreeModel())
                    }), e
                }, e
            }()
        },
        xk4V: function(e, t, n) {
            var i = n("4fRq"),
                o = n("I2ZF");
            e.exports = function(e, t, n) {
                var r = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var l = (e = e || {}).random || (e.rng || i)();
                if (l[6] = 15 & l[6] | 64, l[8] = 63 & l[8] | 128, t)
                    for (var s = 0; s < 16; ++s) t[r + s] = l[s];
                return t || o(l)
            }
        },
        xtUU: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("CcnG"),
                o = n("Tff5"),
                r = (n("58b6"), n("xZld"));
            t.TreeComponent = function() {
                function e(e) {
                    this.treeService = e, this.nodeCreated = new i.EventEmitter, this.nodeRemoved = new i.EventEmitter, this.nodeRenamed = new i.EventEmitter, this.nodeSelected = new i.EventEmitter, this.nodeUnselected = new i.EventEmitter, this.nodeMoved = new i.EventEmitter, this.nodeExpanded = new i.EventEmitter, this.nodeCollapsed = new i.EventEmitter, this.loadNextLevel = new i.EventEmitter, this.nodeChecked = new i.EventEmitter, this.nodeUnchecked = new i.EventEmitter, this.menuItemSelected = new i.EventEmitter, this.subscriptions = []
                }
                return e.prototype.ngOnChanges = function(t) {
                    this.tree = this.treeModel ? new r.Tree(this.treeModel) : e.EMPTY_TREE
                }, e.prototype.ngOnInit = function() {
                    var e = this;
                    this.subscriptions.push(this.treeService.nodeRemoved$.subscribe(function(t) {
                        e.nodeRemoved.emit(t)
                    })), this.subscriptions.push(this.treeService.nodeRenamed$.subscribe(function(t) {
                        e.nodeRenamed.emit(t)
                    })), this.subscriptions.push(this.treeService.nodeCreated$.subscribe(function(t) {
                        e.nodeCreated.emit(t)
                    })), this.subscriptions.push(this.treeService.nodeSelected$.subscribe(function(t) {
                        e.nodeSelected.emit(t)
                    })), this.subscriptions.push(this.treeService.nodeUnselected$.subscribe(function(t) {
                        e.nodeUnselected.emit(t)
                    })), this.subscriptions.push(this.treeService.nodeMoved$.subscribe(function(t) {
                        e.nodeMoved.emit(t)
                    })), this.subscriptions.push(this.treeService.nodeExpanded$.subscribe(function(t) {
                        e.nodeExpanded.emit(t)
                    })), this.subscriptions.push(this.treeService.nodeCollapsed$.subscribe(function(t) {
                        e.nodeCollapsed.emit(t)
                    })), this.subscriptions.push(this.treeService.menuItemSelected$.subscribe(function(t) {
                        e.menuItemSelected.emit(t)
                    })), this.subscriptions.push(this.treeService.loadNextLevel$.subscribe(function(t) {
                        e.loadNextLevel.emit(t)
                    })), this.subscriptions.push(this.treeService.nodeChecked$.subscribe(function(t) {
                        e.nodeChecked.emit(t)
                    })), this.subscriptions.push(this.treeService.nodeUnchecked$.subscribe(function(t) {
                        e.nodeUnchecked.emit(t)
                    }))
                }, e.prototype.getController = function() {
                    return this.rootComponent.controller
                }, e.prototype.getControllerByNodeId = function(e) {
                    return this.treeService.getController(e)
                }, e.prototype.ngOnDestroy = function() {
                    this.subscriptions.forEach(function(e) {
                        return e && e.unsubscribe()
                    })
                }, e.EMPTY_TREE = new r.Tree({
                    value: ""
                }), e.decorators = [{
                    type: i.Component,
                    args: [{
                        selector: "tree",
                        template: '<tree-internal #rootComponent [tree]="tree" [settings]="settings" [template]="template"></tree-internal>',
                        providers: [o.TreeService]
                    }]
                }], e.propDecorators = {
                    treeModel: [{
                        type: i.Input,
                        args: ["tree"]
                    }],
                    settings: [{
                        type: i.Input
                    }],
                    nodeCreated: [{
                        type: i.Output
                    }],
                    nodeRemoved: [{
                        type: i.Output
                    }],
                    nodeRenamed: [{
                        type: i.Output
                    }],
                    nodeSelected: [{
                        type: i.Output
                    }],
                    nodeUnselected: [{
                        type: i.Output
                    }],
                    nodeMoved: [{
                        type: i.Output
                    }],
                    nodeExpanded: [{
                        type: i.Output
                    }],
                    nodeCollapsed: [{
                        type: i.Output
                    }],
                    loadNextLevel: [{
                        type: i.Output
                    }],
                    nodeChecked: [{
                        type: i.Output
                    }],
                    nodeUnchecked: [{
                        type: i.Output
                    }],
                    menuItemSelected: [{
                        type: i.Output
                    }],
                    rootComponent: [{
                        type: i.ViewChild,
                        args: ["rootComponent"]
                    }],
                    template: [{
                        type: i.ContentChild,
                        args: [i.TemplateRef]
                    }]
                }, e
            }()
        }
    }
]);