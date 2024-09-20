const init = () => {
    const dialogContainers = document.querySelectorAll('dialog');

    dialogContainers.forEach((dialogContainer) => {
        const dialog = dialogContainer as HTMLDialogElement;
        const [content, footer] = dialog.children;

        if (dialog) {
            const width = dialog.dataset.width || 500;
            const title = dialog.dataset.title || '';

            dialog.classList.add(
              'rounded-xl',
              'shadow-modal',
            );

            dialog.style.width = `${width}px`;

            const modalInnerElement = document.createElement('div');
            modalInnerElement.classList.add('modal-inner');

            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');
            modalInnerElement.appendChild(modalContent);

            // added modal header
            if (title) {
              const header = document.createElement('div');
              header.classList.add(
                'flex',
                'justify-between',
                'items-center',
                'w-full',
                'p-4',
                'border-0',
                'border-grey-200',
              );
  
              header.style.borderBottomWidth = '1px';
  
              const headerTitle = document.createElement('h3');
              headerTitle.classList.add('text-grey-800', 'font-medium', 'text-xl');
              headerTitle.setAttribute('tabindex', '-1');
              headerTitle.innerHTML = title;

              header.appendChild(headerTitle);

              const closeButton = document.createElement('button');
              closeButton.classList.add('close-btn');
              closeButton.innerHTML = `<i class="bi text-3xl text-grey-800 font-thin bi-x"></i>`;
              header.appendChild(closeButton);

              modalContent.appendChild(header);
            }

            // added modal content
            const contentContainer = document.createElement('div');
            contentContainer.classList.add(
              'pt-4', 
              'pl-4', 
              'pr-4', 
              'pb-7',              
            );

            content.classList.add(
              'p-4', 
              'leading-6', 
              'rounded-md', 
              'border-brand-200', 
              'border', 
              'border-dashed', 
              'bg-brand-50',);

            contentContainer.appendChild(content);
            modalContent.appendChild(contentContainer);

            // added modal footer
            if (footer.children.length > 0) {
              footer.classList.add(
                'flex',
                'justify-between',
                'items-center',
                'w-full',
                'p-4',
                'border-0',
                'border-grey-200',
                'bg-grey-50',
              );

              (footer as HTMLElement).style.borderTopWidth = '1px';

              modalContent.appendChild(footer);
            }

            dialog.appendChild(modalInnerElement);

            const style = document.createElement('style');
            style.innerHTML += `
              .scrollContainer {
                scrollbar-width: none;
                --scroll: 0;
                --bleachProgress: 0;
                --bg-offset: 0vh;
              }
              .scrollContent {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
                will-change: scroll-position;
              }
              .scrollContent::-webkit-scrollbar {
                display: none; /* Safary and Chrome */
              }
            `;

            document.head.appendChild(style);

            const closeButton = dialog.querySelector('.close-btn');
    
            closeButton && closeButton.addEventListener('click', () => {
                dialog.close();
            });
        }
    });

};

export default { init };