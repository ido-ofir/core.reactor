module.exports = {
    name: 'flatTemplate',
    components: [
        require('./components/Template'),
        require('./components/TemplateElement'),
    ],
    events: ['flatTemplate.edit', 'flatTemplate.update'],
    tree: {
        isSelecting: false
    },
    init(definition, done){
        
        var core = this;

        core.Type({
            name: 'flatTemplate.body'
        });

        core.Type({
            name: 'flatTemplate',
            schema: [
                {
                    key: "name",
                    type: "string"
                },
                {
                    key: "schema",
                    type: "schema"
                },
                {
                    key: "body",
                    type: "flatTemplate.body"
                }
            ],
            build(element, done){
                let { name, schema, body, id } = element;
                core.Component({
                    name,
                    schema,
                    get(){

                        return {
                            render(){
                                let { Template } = flatTemplate.components;
                                return (
                                    <Template id={ id }/>
                                );
                            }
                        };
                    },
                    done
                })
            }
        });

        let maskStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            right: 0,
            bottom: 0,
            border: '2px solid #6bf',
            zIndex: 9999,
            background: 'rgba(120, 200, 255, 0.3)',
            cursor: 'pointer',
            pointerEvents: 'none'
        }

        let mask = document.createElement('div');
        let hoveredElement = null;
        let mouseX = 0, mouseY = 0;

        Object.assign(mask.style, maskStyle);

        function findElement(el){
            while(el){
                if(el["core.template.element"]){ return el; }
                el = el.parentElement;
            }
        }

        function onClick(e){
            
            if(flatTemplate.get('isSelecting')){
                if(hoveredElement){
                    if(hoveredElement.contains(e.target)){
                        e.stopPropagation();
                        e.preventDefault();
                        flatTemplate.emit('flatTemplate.selection', hoveredElement["core.template.element"]);
                    }
                }
                
            }
            
        }

        function onMouseMove(e){
            if(e.target === hoveredElement){ return; }
            let element = findElement(e.target);
            if(!element){
                if(mask.parentElement){
                    mask.parentElement.removeChild(mask);
                }
                hoveredElement = null;
                return;
            }
            hoveredElement = element;
            if(!flatTemplate.get('isSelecting')){ return; }
            element.appendChild(mask);
        }

        function onMouseLeave(){
            if(flatTemplate.get('isSelecting')){
                if(hoveredElement){
                    if(mask.parentElement){
                        mask.parentElement.removeChild(mask);
                    }
                    hoveredElement = null;
                }
            }
        }

        document.body.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseleave', onMouseLeave);
        document.body.addEventListener('click', onClick);

        let flatTemplate = {
            hoveredId: null,
            startSelecting(){
                if(hoveredElement){
                    hoveredElement.appendChild(mask);
                }
                flatTemplate.set(['isSelecting'], true);
                flatTemplate.emit('flatTemplate.startSelecting', true);
            },
            stopSelecting(){
                if(mask.parentElement){
                    mask.parentElement.removeChild(mask);
                }
                flatTemplate.set(['isSelecting'], false);
                flatTemplate.emit('flatTemplate.stopSelecting', false);
            },
            toggleSelecting(){
                if(flatTemplate.get(['isSelecting'])){
                    flatTemplate.stopSelecting();
                }
                else{
                    flatTemplate.startSelecting();
                }
            }
        }
        done(flatTemplate);
    }
};